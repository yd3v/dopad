const fileRouter = require("express").Router();
const fileController = require("../controllers/fileController")
fileRouter.post("/:filename/write", fileController.write)
fileRouter.get("/:filename/read", fileController.read)
module.exports = fileRouter