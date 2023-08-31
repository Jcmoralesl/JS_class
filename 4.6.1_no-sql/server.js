const express = require('express')
const mongoose = require('mongoose')
const PORT = 3000

const server = express()

server.use(express.json())

const mongooseConnect = async () => {
    try{
        await mongoose.connect('mongodb+srv://juancamilomorales43:wio82jPQvGjcfcSh@cluster0.abtu2od.mongodb.net/')
        console.log('Conexión exitosa')
    } catch (error) {
        console.error(error)
    }
}

mongooseConnect ()

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})