const express = require('express')

let testData = [
    { 
        title: "Introduction to Variables",
        content: `In Python, a variable can be described as a way to store data. This data can be used later in your program. `
    },
    { 
        title: "Introduction to Functions",
        content: `In Python, a variable can be described as a way to store data. This data can be used later in your program. `
    },
    { 
        title: "Introduction to Data Manipulation",
        content: `In Python, a variable can be described as a way to store data. This data can be used later in your program. `
    }
];

let route = express.Router()

route.get("/", (req, res) => {
    res.json(testData)
})

module.exports = route