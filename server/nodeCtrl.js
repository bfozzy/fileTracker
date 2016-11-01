var app = require("./server.js");
var db = app.get("db");

module.exports = {
  getTeam: function(req, res){
    db.get_team(function(err, team){
      if (err){
        console.log(err);
        res.status(400).json(err);
      }
      else res.status(200).json(team);
    });
  },
  addTeamMember: function(req, res){
  db.add_team_member([req.body.name], function(err){
    if (err){
      res.status(400).json(err);
    }
    else res.status(200).json("member added");
  });
  },
  deleteTeamMember: function(req, res){
    db.delete_team_member([req.params.memberId], function(err){
      if (err){
        res.status(400).json(err);
      }
      else res.status(200).json("member deleted");
    });
  }
};
