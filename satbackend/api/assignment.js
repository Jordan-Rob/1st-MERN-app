const express = require('express')
const router = express.Router()
const assignmentData = require('../models/assignment')

router.get('/', (request, response) =>{
    assignmentData.find()
    .then(assignment =>{
        response.json(assignment)
    })
    .catch(error =>{
        response.json(error)
    })
})

router.post('/create', (request, response) =>{
    const createdAssignment = new assignmentData({
        username:request.body.username,
        assignmentReport:request.body.assignmentReport,
        timeSubmitted:request.body.timeSubmitted
    })
    createdAssignment.save()
    .then(assignment =>{
        response.json(assignment)
    })
    .catch(error =>{
        response.json(error)
    })
})

router.get('/:id', (request, response) =>{
    assignmentData.findById(request.params.id)
    .then(assignment =>{
        response.json(assignment)
    })
    .catch(error =>{
        response.json(error)
    })
})


router.delete('/:id', (request, response) =>{
    assignmentData.findByIdAndDelete(request.params.id)
    .then(() =>{
        response.json('Student deleted')
    })
    .catch(error =>{
        response.json(error)
    })
})


router.post('/update/:id', (request, response) =>{
    assignmentData.findById(request.params.id)
        .then(assignment =>{
            assignment.username = request.body.username
            assignment.assignmentReport = request.body.assignmentReport
            assignment.timeSubmitted = request.body.timeSubmitted
            assignment.save()
                .then(() =>{
                    response.json('Exercise Updated')
                })
        })
        .catch(error =>{
            response.json(error)
        })
})
module.exports = router