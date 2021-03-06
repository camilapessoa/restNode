const atendimentos = require('../models/atendimentos')
const Atendimento = require('../models/atendimentos')

module.exports = app => {

    app.get('/atendimentos', (req, res) => {
        Atendimento.lista(res)
    })

    app.get('/atendimentos/:id', (req, res) =>{ //: é o parâmetro e o id é o nome doparâmetro
        const id = parseInt(req.params.id)

        Atendimento.buscaPorId(id, res)

    }) 
    
    app.post('/atendimentos', (req, res) => {
        const atendimento = req.body
        //console.log('Atendimento enviado');
        //console.log(req.body);
        Atendimento.adiciona(atendimento, res)
        //res.send ('Você está na rota de atendimentos e realizando um POST')
    })

    app.patch('/atendimentos/:id', (req, res)=>{
        const id = parseInt(req.params.id)
        const valores = req.body

        Atendimento.altera(id, valores, res)
    })

    app.delete('/atendimentos/:id', (req, res) =>{
        const id = parseInt(req.params.id)

        Atendimento.deleta(id, res)
    })

}