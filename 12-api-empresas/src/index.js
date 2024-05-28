const express = require('express')
const app = express()
const PORT = 3000

const DBConect = require('./database/connection')
DBConect()

const autenticacaoRouter = require('./router/autenticacaoRouter')
app.use(autenticacaoRouter)

const router = require('./router/router')
app.use(router)

app.listen(PORT, ()=> {
    console.log(`Api rodando na porta ${PORT}`)
})