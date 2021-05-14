const express = require('express')

let testData = [
    { 
        title: "Python Basics",
        description: ""
    },
    { 
        title: "Python Web",
        content: ""
    }
];

let route = express.Router()

route.get("/", (req, res) => {
    res.json(testData)
})

module.exports = route