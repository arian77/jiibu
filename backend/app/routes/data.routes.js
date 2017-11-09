module.exports = function(app) {
  var datas = require("../controllers/data.controller.js");

  //Create a new Data
  app.post("/datas", datas.create);
  //Retrieve all Datas
  app.get("/datas", datas.findAll);
  //Retrieve a single Data with noteId
  app.get("/datas/:dataId", datas.findOne);
  //Update a Data with dataId
  app.put("/datas/:dataId", datas.update);
  //Delete a Data with dataID
  app.delete("/datas/:dataId", datas.delete);
};
