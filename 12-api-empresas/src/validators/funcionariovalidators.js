const yup = require('yup')

const schema = yup.object().shape(
    {
        nome: yup
        .string("O campo preceisa ser um texto!")
        .required("Campo obrigatorio!"),
        cpf: yup
        .string("O campo precisa ser um texto!")
        .required("Campo obrigatorio"),
        email: yup
        .string("O campo precisa ser um texto!")
        .email("E-mail invalido")
        .required("Campo obrigatorio!"),
        telefone: yup
        .string("O campo precisa ser um texto!")
        .required("Campo obrigatorio!"),
        dataContratacao: yup
        .date("Data inválida")
        .required("Campo obrigatorio!"),
        dataNascimento: yup
        .date("Data inválida")
        .required("Campo obrigatorio!"),
        genero: yup
        .string("O campo precisa ser um texto!")
        .required("Campo obrigatorio!"),
        cargo: yup
        .string("O campo precisa ser um texto!"),
        departamento: yup
        .string("O campo precisa ser um texto!")
    }
)

function validarFuncionario(req, res, next){
    schema
        .validate(req.body, {abortEarly: false})
        .then(() => next())
        .catch(err => {

            const erros = err.inner.map(e => {
                const erro = {
                    campo: e.path,
                    erros: e.errors
                }
                return erro
            })

            res.status(404).json(
                {
                    mensagem: "Falha na validação dos campos",
                    erros
                }
            )
        })
}

module.exports = {
    validarFuncionario
}
