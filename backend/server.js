const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const connectDB = require('./config/db')
const PORT = process.env.PORT || 8000

// Connect to database
connectDB()

const app = express()

app.get('/', (req, res) => {
  res.send('API running...')
})

app.listen(PORT, () => console.log(`Server running on port ${PORT}`.magenta))
