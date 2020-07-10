const express = require('express')
const app = express()
const cors = require('cors')
const dotenv = require('dotenv')
const mongoose = require('mongoose')

dotenv.config()

mongoose.connect(process.env.DB_ACCESS, { useUnifiedTopology: true }, () => {
    console.log('DB Connected')
})

app.listen(5000, () => {
    console.log('server is up & running')
})