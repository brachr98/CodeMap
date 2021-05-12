const express = require('express')
const app = express()

app.get('/api/tutorials', (req, res) => {
    res.json([
        "Tutorial 1",
        "tutorial 2"
    ])
})

app.listen(3000, () => {
    console.log("Listening on port 3000!")
})