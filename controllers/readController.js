const fs = require("fs")
const readController = (req, res) => {

    let res_ = {

    }
    const filename = req.params.filename
    try {
        const path = `./files/${filename}.txt`
        if (!fs.existsSync(path)) {
            fs.writeFileSync(path, "New file")
        }
        const data = fs.readFileSync(path).toString()
        res_.success = true
        res_.filename = filename
        res_.data = data

    } catch (error) {
        res_.success = false

    }

    res.json(res_)
}
module.exports = readController