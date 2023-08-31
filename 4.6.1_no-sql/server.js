const express = require('express')
const mongoose = require('mongoose')
const PORT = 3000

const server = express()

server.use(express.json())

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})