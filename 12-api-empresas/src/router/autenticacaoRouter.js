const express = require('express')
const router = express.Router()

//controller  
const AutenticacaoController = require('../controllers/AutenticaçãoController')

//validators
const {validarUsuario} = require('../validators/UsuarioValidators')

router.post('/auth/registrar', validarUsuario, AutenticacaoController.registrar)

module.exports = router