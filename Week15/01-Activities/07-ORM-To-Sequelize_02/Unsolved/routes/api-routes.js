// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

const db = require("../models")

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the todos
  app.get("/api/todos", function(req, res) {
    db.todo.findAll({}).then(result => res.json(result));
  });

  // // POST route for saving a new todo. We can create a todo using the data on req.body
  app.post("/api/todos", function(req, res) {
    db.todo.create({
      text: req.body.text,
      author: req.body.complete
    }).then(result => res.json(result))
  });

  // // DELETE route for deleting todos. We can access the ID of the todo to delete in
  // // req.params.id
  app.delete("/api/todos/:id", function(req, res) {
    db.todo.destroy({
      where: {id:req.params.id}
    }).then(result => res.json(result))
  
  });

  // // PUT route for updating todos. We can access the updated todo in req.body
  app.put("/api/todos", function(req, res) {
    db.todo.update(
      {text: req.body.text}, 
      {where: {id: req.body.id}}
      ).then(result => res.json(result))
    console.log("PUT API")
    console.log(req.body)
  });
};

