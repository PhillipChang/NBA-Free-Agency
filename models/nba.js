// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var nba = {
  selectAll: function(cb) {
    orm.selectAll("players", function(res) {
      cb(res);
      console.log("here we at select all");
    });
  },
  // The variables cols and vals are arrays.
  insertOne: function(cols, vals, cb) {
    orm.insertOne("players", cols, vals, function(res) {
      cb(res);
      console.log("we git to insert")
    });
  },
  updateOne: function(objColVals, condition, cb) {
    orm.updateOne("players", objColVals, condition, function(res) {
      cb(res);
    });
  },

  delete: function(condition, cb){
    orm.delete("players", condition, function(res) {
      cb(res);
    });
  }
};

module.exports = nba;
