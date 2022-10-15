const saveController = require("../controllers/saveController")
const saveRouter = require("express").Router()

saveRouter.post("/save/:filename", saveController)

module.exports = saveRouter