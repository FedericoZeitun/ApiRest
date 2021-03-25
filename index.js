const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const Users = require('./API/users')


const app = express()
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.use('/api/users', Users)

mongoose.connect(
        'mongodb://localhost/usuarios',
        {useNewUrlParser: true},
        (err, res)=>{
            err && console.log('Error conectando a la base de datos')
            app.listen(4000, ()=>{
                console.log("Servidor corriendo en http://localhost:4000")
            })
        }
    )