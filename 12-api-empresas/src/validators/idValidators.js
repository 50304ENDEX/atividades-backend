const mongoose = require('mongoose')

function validarID(req, res, next){
    const idValid = mongoose.Types.ObjectId.isValid(req.params.id)
    if(isValid){
        next()
    }
    else{
        return res.status(400).json({mensagem:"ID invalido"})
    }
}

module.exports = {
    validarID
}