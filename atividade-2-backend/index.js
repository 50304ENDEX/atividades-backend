// configurando o projeto
const express = require('express')
const app = express()
const port = 3034

//middleware
app.use(express.json())

//1.
app.post('/exercicio-1', (req, res) =>{
    const corpo = req.body
    console.log(corpo)

    const EstoqueMedio = (corpo.quantidadeMinima + corpo.quantidadeMaxima) /2

    const resposta = {
        peca: corpo.peca,
        EstoqueMedio: EstoqueMedio
    }

    res.json(resposta)
})

//2.
app.post('/exercicio-2', (req, res) => {
    const salario = req.body.valor
    console.log(salario)

        if(salario < 1000){
            aumento = salario * 0.3
            tem = "tem aumento igual a"
        }
        else{
            aumento = 0
            tem = "não tem aumento e continua sendo de"
        }
    const resp = tem
    const Resultado = salario + aumento

    res.json(`O salario é ${salario}, e ${resp} ${Resultado}`)
})

//3.
app.post('/exercicio-3', (req, res) =>{
    const nome = req.body.nome
    const valo = req.body.salario_fixo
    const valor = req.body.total_vendas
    const porcent = req.body.porcentagem

    const valor_porcent = valor*(porcent/100)
    const result = valo + valor_porcent

    res.json(`O salario do vendedor ${nome} é de ${result} `)
})

//4.
app.post('/exercicio-4', (req, res) =>{
    const nome = req.body.nome
    const distancia = req.body.distancia
    const hora = req.body.hora

    const KmEtros = distancia * 1000
    const seg = hora * 60 * 60
    const VM = KmEtros / seg


    res.json(`O piloto ${nome} percorreu uma distancia de ${distancia} km em ${hora} horas que equivale a uma velocidade media é ${VM} m/s`)
})

//5.
app.post('/exercicio-5', (req, res) =>{
    const salario = req.body.valor
        if(salario <= 2000){
            aumento = salario * 0.5
            resp = `O salario é de R$ ${salario} e atualizado fica R$`
        }
        else{
            aumento = salario * 0.3
            resp = `O salario é de R$ ${salario} e atualizado fica R$`
        }

        const resul = salario + aumento

        res.json(`${resp} ${resul}`)
})


//6.
app.post('/exercicio-6', (req, res) =>{
    const altura = req.body.altura
    const genero = req.body.sexo

    switch(genero){
        case "masculino":
            IMC = 72.7 / altura
            res.json(`genero é masculino e o peso medio é ${IMC}`)
        break;
        case "feminino":
            IMC = 62.1 / altura
            res.json(`O genero é feminino e o peso medio é ${IMC}`)
    }

})

//7.
app.post('/exercicio7', (req, res) => {
    let listaProdutos = []

    req.body.forEach(produto => {
        listaProdutos.push(produto)
    });

    let maiorPrecoLido = 0
    listaProdutos.forEach(produto => {
        if (produto.preco > maiorPrecoLido){
            maiorPrecoLido = produto.preco
        }
    })

    let soma = 0
    console.log("soma ", soma)
    listaProdutos.forEach(produto => {
        console.log("produto preco ", produto.preco)
        soma = soma + produto.preco
        console.log("soma ", soma)
    })

    let media = soma / listaProdutos.length

    res.json({
        maiorPrecoLido: maiorPrecoLido,
        media: media.toFixed(2)
    })
})



//8.
app.post("/exercicio-8", (req, res) =>{
    const cargo = req.body.codigo_cargo
    const valor = req.body.salario

    switch(cargo){
        case 101:
             valor_aumento = valor * 0.05
        break;

        case 102:
            valor_aumento = valor * (7.5 / 100)
        break;

        case 103:
            valor_aumento = valor * (10 / 100)
        break;

        default:
            valor_aumento = valor * (0.15)
    }

        const novo_salario = valor_aumento + valor


    res.json(`O salario do funcionario é de R$${valor} e co o aumento foi para R$${novo_salario}`)
})


//9.
app.post("/exercicio-9", (req, res) =>{
    const minimo = req.body.salario_minimo
    const dependente = req.body.N_dependentes
    const hora = req.body.N_total_horas
    const extra = req.body.horas_extras

    const valo_HTrab_dep_extra = hora * (minimo * 1) / 5 + dependente * 32 + (minimo * 1)/5 + ((minimo * 1)/5) * (0.5)

    if(valo_HTrab_dep_extra < 200){
        imposto = valo_HTrab_dep_extra * 0
    }
    else if (valo_HTrab_dep_extra >= 2000 || valo_HTrab_dep_extra <= 5000) {
        imposto = valo_HTrab_dep_extra * 0.1
    }
    else {
        imposto = valo_HTrab_dep_extra * 0.2
    }

    let liquido = valo_HTrab_dep_extra - imposto

    if(liquido <= 3500){
        gratificação = 1000
    }
    else{
        gratificação = 500
    }

    const grat_liq = liquido + gratificação

    res.json(`O salario liquido é R$${liquido} e salario final é R$${grat_liq}`)
})

app.listen(port, () =>{
    console.log("aplicação iniciada em http://localhost:3034")
})