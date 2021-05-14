const express = require('express')
const app = express()

const tutorials = require('./routes/tutorials.js')
const courses   = require('./routes/courses.js')

app.use('/api/tutorials', tutorials)
app.use('/api/courses', courses)

app.listen(3000, () => {
    console.log("Listening on port 3000!")
})