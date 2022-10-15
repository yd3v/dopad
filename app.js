const express = require("express")
const multer = require("multer")
const app = express()
const saveRoute = require("./routes/saveRoute")
const readRoute = require("./routes/readRoute")
require("dotenv").config()
const PORT = process.env.PORT | 3003

app.use(multer().array())

app.use("/", express.static(__dirname + "/static"));
app.use("/api", saveRoute)
app.use("/api", readRoute)

app.listen(PORT, () => {
    console.log("Listening " + PORT)
});