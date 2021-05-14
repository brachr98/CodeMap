const express = require('express')

let testData = [
    { 
        id: 1,
        title: "Introduction to Variables",
        content: `In Python, a variable can be described as a way to store data. This data can be used later in your program. `
    },
    { 
        id: 2,
        title: "Introduction to Functions",
        content: `In Python, a variable can be described as a way to store data. This data can be used later in your program. `
    },
    { 
        id: 3,
        title: "Introduction to Data Manipulation",
        content: `In Python, a variable can be described as a way to store data. This data can be used later in your program. `
    }
];

let route = express.Router()

route.get("/", (req, res) => {
    res.json(testData)
})

module.exports = route