module.exports = function(app) {
  var notes = require("../controllers/note.controller.js");

  //Create a new Data
  app.post("/notes", notes.create);
  //Retrieve all Datas
  app.get("/notes", notes.findAll);
  //Retrieve a single Data with noteId
  app.get("/notes/:noteId", notes.findOne);
  //Update a Data with dataId
  app.put("/notes/:noteId", notes.update);
  //Delete a Data with dataID
  app.delete("/notes/:noteId", notes.delete);
};
