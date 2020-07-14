const express = require('express')
const app = express()
const cors = require('cors')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const studentUrls = require('./api/student')
const assignmentUrls =require('./api/assignment')

dotenv.config()

mongoose.connect(process.env.DB_ACCESS, { useUnifiedTopology: true }, () => {
    console.log('DB Connected')
})

app.use(express.json())
app.use(cors())
app.use('/assignment', assignmentUrls)
app.use('/students', studentUrls)

app.listen(5000, () => {
    console.log('server is up & running')
})
