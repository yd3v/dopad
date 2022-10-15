

function genFilename() {
    let payload = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var output = '';
    for (var i = 0; i < 8; i++) {
        var randomPoz = Math.floor(Math.random() * payload.length);
        output += payload.substring(randomPoz, randomPoz + 1);
    }
    return output;
}

const updateData = () => {
    if (document.location.hash) {
        filename = document.location.hash
        filename = filename.match(/[\w]+/)
        axios.get("/api/read/" + filename).then(({ data }) => {
            if (data.data) {
                document.getElementById("data").value = data.data
            } else {
                alert("err")
            }
        })
    } else {
        document.location.href = "/#" + genFilename()
    }
}

const saveData = (filename, data) => {
    const formData = new FormData()
    formData.append("data", data)
    axios.post("/api/save/" + filename, formData).then(({ data }) => {
        console.log(data)
    })
}
document.getElementById("data").onkeyup = (e) => {
    filename = document.location.hash
    filename = filename.match(/[\w]+/)
    saveData(filename, e.target.value)
}

window.onhashchange = updateData
window.onload = updateData