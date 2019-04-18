var express = require("express");
var fs = require("fs-extra");
const BodyParser = require("body-parser");
const cors = require('cors');
const multer = require("multer");
const path = require("path");
var crypto = require('crypto');
const nodemailer = require("nodemailer");
const archiver = require("archiver");

const app = express();


app.use(express.static('./public'));

let upload = multer({
    storage: multer.diskStorage({
        destination: (req, file, callback) => {
            let userId = req.params.name;
            let path = `./public/assets/${userId}`;
            fs.mkdirsSync(path);
            callback(null, path);
        },
        filename: (req, file, callback) => {
            //originalname is the uploaded file's name with extn
            callback(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
        }
    })
});

function zipDirectory(source, out) {
    const archive = archiver("zip", { zlib: { level: 9 } });
    const stream = fs.createWriteStream(out);

    return new Promise((resolve, reject) => {
        archive
            .directory(source, false)
            .on("error", err => reject(err))
            .pipe(stream);

        stream.on("close", () => resolve());
        archive.finalize();
    });
}

var corsOptions = {
    origin: 'https://dev.inclusion-restaurant.fr',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
}

app.use(BodyParser.json());
app.use(cors(corsOptions));

app.route('/api/pages/:name').get((req, res) => {
    const page = req.params['name'];
    var json = fs.readFileSync("./public/json/pages.json");
    res.send(JSON.parse(json)[page]);
});

app.route('/api/pages/:name/:id').get((req, res) => {
    const page = req.params['name'];
    const id = req.params['id'];
    var json = fs.readFileSync("./public/json/pages.json");
    res.send(JSON.parse(json)[page]["photo-content"][id]);
});

app.route("/api/pages").get((req, res) => {
    var json = fs.readFileSync('./public/json/pages.json');
    res.send(JSON.parse(json));
});

app.route("/api/admin").get((req, res) => {
    var json = fs.readFileSync("./public/json/admin.json");
    res.send(JSON.parse(json));
})

app.route("/api/pages").post((req, res) => {
    res.send(201, req.body);
});

app.route("/api/pages/:name/:id").put((req, res) => {
    res.send(201, req.body);
});

app.route("/api/pages/photocontent/:name/:id").delete((req, res) => {
    const name = req.params["name"];
    const id = req.params["id"];
    var json = JSON.parse(fs.readFileSync("./public/json/pages.json"));
    var source = "./public/" + json[name]["photo-content"][id]["source"];
    fs.unlinkSync(source);
    delete json[name]["photo-content"][id];
    json[name]["photo-content"] = json[name]["photo-content"].filter(function (
        col
    ) {
        return col.Source != "Foo";
    });
    fs.writeFileSync("./public/json/pages.json", JSON.stringify(json));
    res.sendStatus(204);
    console.log(json);
});

app.route("/api/pages/bandeau/:name/:id").delete((req, res) => {
    const name = req.params["name"];
    const id = req.params["id"];
    var json = JSON.parse(fs.readFileSync("./public/json/pages.json"));
    var source = "./public/" + json[name]["bandeau"][id]["source"];
    fs.unlinkSync(source);
    delete json[name]["bandeau"][id];
    json[name]["bandeau"] = json[name]["bandeau"].filter(function (
        col
    ) {
        return col.Source != "Foo";
    });
    fs.writeFileSync("./public/json/pages.json", JSON.stringify(json));
    res.sendStatus(204);
    console.log(json);
});

app.route("/api/pages/:name/dir").get((req, res) => {
    dir = "./public/assets/" + req.params.name;
    console.log("dir" + dir);
    res.send(201, req.body);
})

app.post("/api/pages/:name/upload", upload.single("photo"), (req, res) => {
    if (!req.file) {
        console.log("No file received");
        return res.send({
            success: false
        });
    } else {
        console.log("file received successfully");
        let name = req.params["name"];
        var json = JSON.parse(fs.readFileSync("./public/json/pages.json"));
        json[name]["photo-content"].push({
            source: req.file.path.slice(7),
            alt: ""
        });
        fs.writeFileSync("./public/json/pages.json", JSON.stringify(json));
        return res.send({
            success: true
        });
    }
});

app.post("/api/pages/:name/uploadbandeau", upload.single("bandeau"), (req, res) => {
    if (!req.file) {
        console.log("No file received");
        return res.send({
            success: false
        });
    } else {
        console.log("file received successfully");
        let name = req.params["name"];
        var json = JSON.parse(fs.readFileSync("./public/json/pages.json"));
        json[name]["bandeau"].push({
            source: req.file.path.slice(7),
            alt: ""
        });
        console.log(JSON.stringify(json));
        fs.writeFileSync("./public/json/pages.json", JSON.stringify(json));
        return res.send({
            success: true
        });
    }
});

app.route("/api/login").post((req, res) => {
    var algorithm = "aes256";
    var cle = 'l5JmP+G0/1zB%v$fd^vf^d$^é"$rnboàç_é"r8B8?2?2pcqGcL^3fe815c5';
    var cipher = crypto.createCipher(algorithm, cle);
    var utilisateur = cipher.update(req.body["username"], "utf8", "hex");
    utilisateur += cipher.final("hex");
    var cipher = crypto.createCipher(algorithm, cle);
    var mdp = cipher.update(req.body["password"], "utf8", "hex");
    mdp += cipher.final("hex");
    if (
        (mdp ==
            "79098e38085cfb3918982010ac21e1788c50a992460cae9b782288f381e01371" &&
            utilisateur == "a82bdc731e23568916a7647f3f16d00a") ||
        req.body["token"] ==
        "558e4feed81eb819966f85ce75846760a348d3468c78d7cc973a1f6bee026724"
    ) {
        res.send(201, [
            true,
            "558e4feed81eb819966f85ce75846760a348d3468c78d7cc973a1f6bee026724"
        ]);
    } else {
        res.send(201, false);
    }
});

app.route("/api/pages/:name/text").post((req, res) => {
    const page = req.params["name"];
    var json = JSON.parse(fs.readFileSync("./public/json/pages.json"));
    json[page] = req.body;
    fs.writeFileSync("./public/json/pages.json", JSON.stringify(json));
    res.sendStatus(204);
    console.log(json);
});

app.route("/api/pages/downloads/:id").post((req, res) => {
    const id = req.params["id"];
    var folder =
        "/home/inclhpth/dev-app/public/assets/" + id;
    zipDirectory(folder, folder + "/images.zip").then(() =>
        res.sendFile(folder + "/images.zip")
    );
});

app.route("/api/contact").post((req, res) => {
    /* Notre code pour nodemailer */
    console.log("test"); // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        service: "gmail",
        secure: false, // true for 465, false for other ports
        auth: {
            user: "inclusion.test.mail@gmail.com", // generated ethereal user
            pass: "clementjules" // generated ethereal password
        }
    });
    console.log(req.body);
    // send mail with defined transport object
    let mailOptions = {
        from: req.body["name"] + req.body["sender"], // sender address
        to: "mathilde.christiaens@isen.yncrea.fr", // list of receivers
        subject: req.body["subject"], // Subject line

        html:
            "Email : " +
            req.body["sender"] +
            "<br>" +
            "Nom : " +
            req.body["name"] +
            "<br>" +
            "Message : " +
            req.body["message"] // html body
    };

    // transporter.sendMail({

    //   from: '"Oui" <jules.guiot@isen.yncrea.fr> ',
    //   to: "inclusion.test.mail@gmail.com", // list of receivers
    //   subject: req.body["subject"], // Subject line
    //   text: req.body["message"], // plain text body
    //   html: req.body["mail"] + "<br>" + req.body["name"] + "<br>" + req.body["message"]
    // });
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log("Message %s sent: %s", info.messageId, info.response);
    });
    transporter.close();
    res.send(201, true);
});

app.all('/*', function (req, res) {
    res.sendfile('public/index.html');
});

app.listen();