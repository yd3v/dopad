const express = require("express")
const multer = require("multer")
const app = express()
const saveRouter = require("./routes/saveRoute")
const readRouter = require("./routes/readRoute")
const apiRouter = express.Router()

require("dotenv").config()
const PORT = process.env.PORT | 3003

app.use(multer().array())

app.use("/", express.static(__dirname + "/static"));

apiRouter.use(saveRouter)
apiRouter.use(readRouter)

app.use("/api", apiRouter)
app.listen(PORT, () => {
    console.log("Listening " + PORT)
});