const mongoose = require('mongoose')

const schema = new mongoose.Schema({
        nome:{
            type: String,
            require: true
        },
        descricao:{
            type: String,
            require: false
        },
        salario:{
            type: String,
            require: true
        }
    },{timestamps: true})

const cargo = mongoose.model('cargo', schema)

module.exports = cargo