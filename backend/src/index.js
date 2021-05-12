const express = require('express')
const app = express()

const tutorials = require('./routes/tutorials.js')

app.use('/api/tutorials', tutorials)

app.listen(3000, () => {
    console.log("Listening on port 3000!")
})