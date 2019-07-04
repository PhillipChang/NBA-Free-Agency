var express = require("express");
var nba = require("../models/nba.js");

router.get("/", function(req, res) {
  nba.selectAll(function(data) {
    var hbsObject = {
      nba: data
    };
    // console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/players", function(req, res) {
  nba.insertOne(["player", "traded"], [req.body.name, req.body.traded], function(result) {

    res.json({ id: result.insertId });
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


module.exports = router;
