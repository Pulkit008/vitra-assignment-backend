const fs = require('fs')

// for getting People Data
const getPeopleData = async (req, res) => {
    try {
        const dataBuffer = fs.readFileSync('./src/controllers/people.json')
        const dataJSON = dataBuffer.toString()
        res.status(200).send(JSON.parse(dataJSON))      // 200 created
    } catch (error) {
        console.log(error)
        res.status(400).send(error)         // 400 bad request
    }
}

module.exports = {
    getPeopleData
}