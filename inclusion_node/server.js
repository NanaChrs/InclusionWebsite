var express = require("express");
var fs = require("fs");
const BodyParser = require ("body-parser");
const cors = require('cors');
var jsonPages = require("./json/pages.json")

const app = express();

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
    delete json[name]["photo-content"][id];
    json[name]["photo-content"] = json[name]["photo-content"].filter(function(col){
      return col.Source != 'Foo';
    }); 
    fs.writeFileSync("./json/pages.json", JSON.stringify(json));
    res.sendStatus(204);
    console.log(json);
});

