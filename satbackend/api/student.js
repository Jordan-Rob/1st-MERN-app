const express = require('express')
const router = express.Router()
const studentData = require('../models/student')

router.get('/', (request, response)=>{
    studentData.find()
    .then((data)=>{
        response.json(data)
    })
    .catch((error)=>{
        response.json(error)
    })
})

module.exports = router