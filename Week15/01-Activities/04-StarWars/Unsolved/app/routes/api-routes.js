// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
// var orm = require("../config/orm.js");
var Character = require("../model/character.js");



// Routes
// =============================================================
module.exports = function (app) {

  // Search for Specific Character (or all characters) then provides JSON
  app.get("/api/:characters?", function (req, res) {
    console.log(req.params.characters);
    // If the user provides a specific character in the URL...
    if (req.params.characters) {

      // Then display the JSON for ONLY that character.
      // (Note how we're using the ORM here to run our searches)
      Character.findOne({
        where: {
          routeName: req.params.characters
        }
      }).then(results => res.json(results))

    }

    // Otherwise...
    else {
      // Otherwise display the data for all of the characters.
      // (Note how we're using the ORM here to run our searches)
      Character.findAll({}).then(function (results) {
        // results are available to us inside the .then
        res.json(results);
      });
    }

  });

  // If a user sends data to add a new character...
  app.post("/api/new", function (req, res) {

    // Take the request...
    var character = req.body;
    console.log(character);
    // Then send it to the ORM to "save" into the DB.
    Character.create({
      routeName: "ABCD",
      name: character.name,
      role: character.role,
      age: character.age,
      forcePoints: character.forcePoints
    }).then(function (results) {
      // `results` here would be the newly created chirp
      res.end();
    });

  });
};