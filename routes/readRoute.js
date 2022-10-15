const readController = require("../controllers/readController")
const readRouter = require("express").Router()

readRouter.get("/read/:filename", readController)

module.exports = readRouter