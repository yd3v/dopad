const fs = require("fs")
class FileController {
    static async read(req, res) {

        let res_ = {

        }

        const filename = req.params.filename.match(/[\w]+/)[0]

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
    static async write(req, res) {

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
module.exports = FileController