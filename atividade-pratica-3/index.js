const express = require('express')
const app = express()

//middelware
app.use(express.json())

// rota
app.get('/', (req, res) =>{
    res.json("OK")
})

//rota externa
const ListaRouter = require('./router/PESSOA-lista')
app.use(ListaRouter)

app.listen(4750, (req, res) =>{
    console.log("http://localhost:4750")
})