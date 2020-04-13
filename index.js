const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()

app.use(bodyParser.json())
app.use(cors())

app.get('/', (req, res) => {
   return res.json({
        success: true,
        message: 'Hello World',
        data: null
    })
})

app.post('/', (req, res) => {
    if(req.body.message === undefined){
        return res.json({
            success: false,
            message: 'field message is required',
            data: null
        })
    }
    return res.json({
        success: true,
        message: req.body.message,
        data: null
    })
})

app.listen(7200, () => {
    console.log('running on port 7200')
})