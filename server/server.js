var express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");
var app = module.exports = express();
var massive = require("massive");
var connectionString = "postgres://postgres:@localhost/filetracker";
var massiveInstance = massive.connectSync({connectionString : connectionString});

app.set("db", massiveInstance);

app.use(cors());
app.use(bodyParser.json());
app.use(express.static("public"));
var db = app.get('db');
var nodeCtrl = require("./nodeCtrl.js");

//Team Member Endpoints
app.get("/team", nodeCtrl.getTeam);
app.post("/team/new", nodeCtrl.addTeamMember);
app.delete("/team/:memberId/delete", nodeCtrl.deleteTeamMember);

//File Endpoints

var config = require("./config.js");
var port = config.serverPort;

app.listen(port, function(){
  console.log("listening to 8001");
});
