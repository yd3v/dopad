const SaveController = require("../controllers/saveController")
const saveRouter = require("express").Router()

saveRouter.post("/save/:filename", SaveController.save)

module.exports = saveRouter