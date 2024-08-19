const express = require('express')
const format = require('string-format')
const app = express()
const port = 8383

//Allows the server to see the index.html page in the public folder
app.use(express.static('public'))
//Expects to receive json in the app.post method
app.use(express.json())

app.get('/info', (req, res) => {
    //res.status(200).send('<h1>hi<h1/>')
    res.status(200).json({info: 'preset text :)'})
})

app.get('/info2', (req, res) => {
    //res.status(200).send('<h1>hi<h1/>')
    res.status(200).json({info: 'OTHER THING'})
})

app.post('/', (req,res) => {
    const {parcel} = req.body
    console.log(parcel)
    if (!parcel) {
        res.status(400).send({status: "failed"})
    }
    res.status(200).send({status: "received"})

})

app.listen(port, () => console.log(format("server has started on port: {}", port)))