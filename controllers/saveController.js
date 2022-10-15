const fs = require("fs")
const saveController = (req, res) => {

    let res_ = {
    }

    const filename = req.params.filename.match(/[\w]+/)
    const data = req.body.data

    try {

        fs.writeFileSync(`./files/${filename}.txt`, data)
        res_.success = true
        res_.filename = filename
        res_.writenSize = data.length

    } catch (error) {
        res_.success = false
    }

    res.json(res_)
}
module.exports = saveController