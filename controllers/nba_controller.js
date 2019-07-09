var express = require("express");
var router = express.Router();

var nba = require("../models/nba.js");


router.get("/", function(req, res) {
  nba.selectAll(function(data) {
    var hbsObject = {
      players: data
    };
    // console.log("hbs object",hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/players", function(req, res) {
  nba.insertOne(["name", "traded"], [req.body.name, req.body.traded], function(result) {
    res.json({ id: result.insertId });
    console.log("result from posting",result);
  });
});


router.put("/api/players/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  nba.updateOne(
    {
      traded: req.body.traded
    },
    condition,
    function(result) {
      if (result.changedRows === 0) {

        return res.status(404).end();
      }
      res.status(200).end();
    }
  );
});


router.delete("/api/players/:id", function(req, res) {

  var condition = "id = " + req.params.id;


  console.log("condition", condition);
   
   nba.delete(condition, function(result) {
    console.log("DELETE RESPONSE", result)
     if (result.affectedRows === 0) {
        return res.status(404).end();
      }
      else
        {
          
          res.status(200).end();
        }
    });
});

module.exports = router;
