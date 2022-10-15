const ReadController = require("../controllers/readController")
const readRouter = require("express").Router()

readRouter.get("/read/:filename", ReadController.read)

module.exports = readRouter