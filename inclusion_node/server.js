var express = require("express");
var fs = require("fs");

const app = express();

app.listen(8000, () => {
    console.log('Server started!')
  })

app.route('/api/pages/:name').get((req, res) => {
    const page = req.params['name'];
    var json=fs.readFileSync("./json/pages.json");
    res.send(JSON.parse(json)[page]);
  });

app.route("/api/pages").get((req,res) =>{
    var json=fs.readFileSync('./json/pages.json');
    res.send(JSON.parse(json));
  });

app.route("/api/admin").get((req, res) => {
    var json=fs.readFileSync("./json/admin.json");
    res.send(JSON.parse(json));
})