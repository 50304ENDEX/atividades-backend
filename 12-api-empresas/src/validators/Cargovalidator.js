const yup = require('yup')

const schema = yup.object().shape(
    {
        nome: yup
        .string("campo nome precisa ser um texto")
        .required("Campo nome é obrigatorio"),
        descricao: yup
        .string("campo descrição precisa ser texto"),
        salario: yup
        .number("o salario precisa ser um numerico")
        .min(1412, "Campo salario é obrigatorio")
    }
)

function validarCargo(req, res, next){
    schema
        .validate(req.body, { abortEarly: false})
        .then(() => next())
        .catch(err => res.status(400).json(
            {
                mensagem:"erro na validação dos campos",
                erro: err.errors
            }
        ))
}

module.exports ={
    validarCargo
}