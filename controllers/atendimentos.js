const Atendimento = require('../models/atendimentos')

module.exports = app => {

    app.get('/atendimentos', (req, res) => res.send('Você está na rota de atendimentos'))

    app.post('/atendimentos', (req, res) => {
        const atendimento = req.body
        //console.log('Atendimento enviado');
        //console.log(req.body);
        Atendimento.adiciona(atendimento)
        res.send ('Você está na rota de atendimentos e realizando um POST')
    })

}