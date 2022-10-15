const express = require("express")
const multer = require("multer")
const app = express()

const fileRouter = require("./routes/fileRoute")
const apiRouter = express.Router()

require("dotenv").config()
const PORT = process.env.PORT | 3003

app.use(multer().array())
app.use("/", express.static(__dirname + "/static"));

apiRouter.use("/file", fileRouter)

app.use("/api", apiRouter)
app.listen(PORT, () => {
    console.log("Listening " + PORT)
});