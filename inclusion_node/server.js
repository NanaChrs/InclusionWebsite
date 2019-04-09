var express = require("express");
var fs = require("fs-extra");
const BodyParser = require("body-parser");
const cors = require('cors');
var jsonPages = require("./json/pages.json");
const multer = require("multer");
const path = require("path");
var crypto = require('crypto');

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
      callback(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
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
  var json = fs.readFileSync("./json/pages.json");
  res.send(JSON.parse(json)[page]);
});

app.route('/api/pages/:name/:id').get((req, res) => {
  const page = req.params['name'];
  const id = req.params['id'];
  var json = fs.readFileSync("./json/pages.json");
  res.send(JSON.parse(json)[page]["photo-content"][id]);
});

app.route("/api/pages").get((req, res) => {
  var json = fs.readFileSync('./json/pages.json');
  res.send(JSON.parse(json));
});

app.route("/api/admin").get((req, res) => {
  var json = fs.readFileSync("./json/admin.json");
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
  fs.unlinkSync(json[name]['photo-content'][id]['source']);
  delete json[name]["photo-content"][id];
  json[name]["photo-content"] = json[name]["photo-content"].filter(function (col) {
    return col.Source != 'Foo';
  });
  fs.writeFileSync("./json/pages.json", JSON.stringify(json));
  res.sendStatus(204);
  console.log(json);
});

app.route("/api/pages/:name/dir").get((req, res) => {
  dir = "./assets/" + req.params.name;
  console.log("dir" + dir);
  res.send(201, req.body);
})

app.post("/api/pages/:name/upload", upload.single('photo'), (req, res) => {
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
      "source": req.file.path,
      "alt": req.file.originalname
    });
    fs.writeFileSync("./json/pages.json", JSON.stringify(json));
    return res.send({
      success: true
    })
  }
});
app.route('/api/login').post((req, res) => {
  console.log(req.body);
  // On définit notre algorithme de cryptage
var algorithm = 'aes256';
// Notre clé de chiffrement, elle est souvent générée aléatoirement mais elle doit être la même pour le décryptage
var cle = 'l5JmP+G0/1zB%v$fd^vf^d$^é"$rnboàç_é"r8B8?2?2pcqGcL^3fe815c5';
console.log(cle);
//cryptage
console.log(req.body['username']);
console.log(req.body['password']);
var cipher = crypto.createCipher(algorithm,cle);
var utilisateur = cipher.update(req.body['username'],'utf8','hex');
console.log(utilisateur);
utilisateur += cipher.final('hex');
console.log(utilisateur);
var cipher = crypto.createCipher(algorithm,cle);
var mdp = cipher.update(req.body['password'],'utf8','hex');
mdp += cipher.final('hex');
console.log(cle);
console.log(mdp == '79098e38085cfb3918982010ac21e1788c50a992460cae9b782288f381e01371');
console.log(utilisateur == 'a82bdc731e23568916a7647f3f16d00a');
if ((mdp == '79098e38085cfb3918982010ac21e1788c50a992460cae9b782288f381e01371') && (utilisateur == 'a82bdc731e23568916a7647f3f16d00a')){
  console.log("Bijour");
  res.send(201, true);
}
else{
  console.log("bite");
  res.send(201, false);
}
  
});