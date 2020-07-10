const mongoose = require('mongoose')

const assignmentSchema = mongoose.Schema({
    studentRegNum:{
        type:Number,
        required:true
    },
    username:{
        type:String,
        required:true
    },
    assignmentReport:{
        type:String,
        required:true
    },
    timeSubmited:{
        type:Number,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
})

module.exports = mongoose.model('assignmentDB', assignmentSchema)