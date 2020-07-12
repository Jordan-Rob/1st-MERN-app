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

router.post('/create', (request, response)=>{
    const student = new studentData({
        username:request.body.username
    })
    student.save()
            .then((data)=>{
                response.json(data)
            })
            .catch((error)=>{
                response.json(error)
            })
})

module.exports = router


