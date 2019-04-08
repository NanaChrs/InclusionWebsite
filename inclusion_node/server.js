var express = require("express");
var fs = require("fs-extra");
const BodyParser = require ("body-parser");
const cors = require('cors');
var jsonPages = require("./json/pages.json");
const multer = require("multer");
const path = require("path");

const app = express();

let upload = multer({
  storage: multer.diskStorage({
    destination: (req, file, callback) => {
      let userId = req.params.name;
      let path = `./assets/${userId}`;
      fs.mkdirsSync(path);
      callback(null, path);
    },
    filename: (req, file, callback) => {
      //originalname is the uploaded file's name with extn
      callback(null, file.originalname);
    }
  })
});

app.listen(8000, () => {
    console.log('Server started!')
  })

  var corsOptions = {
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
  }

app.use(BodyParser.json());
app.use(cors(corsOptions));

app.route('/api/pages/:name').get((req, res) => {
    const page = req.params['name'];
    var json=fs.readFileSync("./json/pages.json");
    res.send(JSON.parse(json)[page]);
  });

  app.route('/api/pages/:name/:id').get((req, res) => {
    const page = req.params['name'];
    const id = req.params['id'];
    var json=fs.readFileSync("./json/pages.json");
    res.send(JSON.parse(json)[page]["photo-content"][id]);
  });

app.route("/api/pages").get((req,res) =>{
    var json=fs.readFileSync('./json/pages.json');
    res.send(JSON.parse(json));
  });

app.route("/api/admin").get((req, res) => {
    var json=fs.readFileSync("./json/admin.json");
    res.send(JSON.parse(json));
})

app.route("/api/pages").post((req, res) => {
    res.send(201, req.body);
});

app.route("/api/pages/:name/:id").put((req, res) => {
    res.send(201, req.body);
});

app.route("/api/pages/:name/:id").delete((req, res) => {
    const name = req.params['name'];
    const id = req.params['id'];
    var json = JSON.parse(fs.readFileSync("./json/pages.json"));
    var src = json[name]['photo-content'][id];
    console.log();
    fs.unlinkSync(json[name]['photo-content'][id]["source"]);
    delete json[name]["photo-content"][id];
    json[name]["photo-content"] = json[name]["photo-content"].filter(function(col){
      return col.Source != 'Foo';
    }); 
    console.log(json[name]['photo-content'][id]);
    fs.writeFileSync("./json/pages.json", JSON.stringify(json));
    res.sendStatus(204);
    console.log(json);
});

app.route("/api/pages/:name/dir").get((req, res)=>{
  dir= "./assets/" + req.params.name;
  console.log("dir"+dir);
  res.send(201, req.body);
})

app.post("/api/pages/:name/upload", upload.single('photo'),(req,res)=>{
  if (!req.file) {
    console.log("No file received");
    return res.send({
      success: false
    });

  } else {
    console.log('file received successfully');
    let name = req.params['name'];
    var json = JSON.parse(fs.readFileSync("./json/pages.json"));
    json[name]["photo-content"].push({
      "source" : req.file.path,
      "alt" : req.file.originalname
    });
    fs.writeFileSync("./json/pages.json", JSON.stringify(json));
    return res.send({
      success: true
    })
  }
})

