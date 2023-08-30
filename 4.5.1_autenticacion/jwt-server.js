const express = require('express')
const jwt = require('jsonwebtoken')
const SECRET_KEY = 'la-puerca-esta-en-la-pocilga'

const PORT = 3000;

const server = express()

const validateJWT = (req, res, next) => {
    const accessToken = req.get.headers(`authorization`)

    jwt.verify(accessToken, SECRET_KEY, () => {
        (error, decode) => {
            if(error) {
                res.status(401).send('acceso denegado')
            } else {
                next ()
            }
        }
    })
}

server.use(express.json())

server.use ('/auth', (req, res) => {
    const {email, password} = req.body 
    const token = jwt.sign({email, password}, SECRET_KEY, {expiresIn: '3m'})

    res.send(token)
})

server.use('/songs', validateJWT, (req,res)=> {
    const songs = [
        {
            title: `Infinity repeating`,
            artisti: `Daft Punk`
        },
        {
            title: `Bohemian Rhapsody`,
            artisti: `Queen`
        },
        {
            title: `Bones`,
            artisti: `Imagine Dragons`
        }
    ]

    res.status(201).send
})

server.listen (PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})