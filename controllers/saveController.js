const fs = require("fs")
class saveController {
    static async save(req, res) {

        let res_ = {
        }

        const filename = req.params.filename.match(/[\w]+/)[0]
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
}
module.exports = saveController