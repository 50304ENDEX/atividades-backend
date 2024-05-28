const express = require('express')
const router = express.Router()

//Controllers
const CargoController = require('../controllers/CargoController')
const departamentoController = require('../controllers/departamentoController')
const funcionarioController = require('../controllers/funcionarioController')
const projetoController = require('../controllers/projetoController')
const tarefaController = require('../controllers/TarefasController.js')

//validators
const {validarID} = require('../validators/idValidators')
const {validarCargo} = require('../validators/Cargovalidator')
const {validarDepartamento} = require('../validators/DeparatamentoValid')
const {validarFuncionario} = require('../validators/funcionariovalidators')
const {projetoValidador} = require('../validators/ProjetoValidators')
const {tarefaValidador} = require('../validators/TarefasValidators')

//cargos
router.get('/cargos', CargoController.buscarTodos)
router.get('/cargos/:id', validarID, CargoController.buscarId)
router.post('/cargos', validarCargo,CargoController.criar)
router.put('/cargos/:id', validarID, validarCargo, CargoController.atualizar)
router.delete('/cargos/:id', validarID, CargoController.excluir)

//Deparatamento

router.get('/departamento', departamentoController.buscarTodos)
router.get('/departamento/:id', validarID, departamentoController.buscarId)
router.post('/departamento', validarDepartamento, departamentoController.criar)
router.put('/departamento/:id', validarID, validarDepartamento, departamentoController.atualizar)
router.delete('/departamento/:id', validarID, departamentoController.excluir)

//funcionarios
router.get('/funcionario', funcionarioController.buscarTodos)
router.get('/funcionario', validarID, funcionarioController.buscarId)
router.post('/funcionario/:id', validarFuncionario, funcionarioController.criar)
router.put('/funcionario/:id', validarID, validarFuncionario, funcionarioController.atualizar)
router.delete('/funcionario/:id', validarID, funcionarioController.excluir)

//projeto
router.get('/projeto', projetoController.getAll)
router.get('/projeto/:id', validarID, projetoController.getById)
router.post('/projeto', projetoValidador, projetoController.create)
router.put('/projeto/:id', validarID, projetoValidador, projetoController.update)
router.delete('/projeto/:id', validarID, projetoController.remove)

//tarefa
router.get('/tarefa', tarefaController.getAll)
router.get('/tarefa/:id', validarID, tarefaController.getById)
router.post('/tarefa', tarefaValidador, tarefaController.create)
router.put('/tarefa/:id', validarID, tarefaValidador, tarefaController.update)
router.delete('/tarefa/:id', validarID, tarefaController.remove)

module.exports = router