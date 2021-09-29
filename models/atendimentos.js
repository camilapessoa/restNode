const moment = require('moment')
const conexao = require('../infraestrutura/conexao')
class Atendimento {

    adiciona(atendimento, res){ //método precisa receber os dados. Qual o atendimento para salvar?
        const dataCriacao = moment().format('YYYY-MM-DD HH:MM:SS')
        const data = moment(atendimento.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:mm:ss') //mm em moment é minuto
        //validacoes
        const dataEhValida = moment(data).isSameOrAfter(dataCriacao)
        const clienteEhValido = atendimento.cliente.length>=5

        const validacoes = [
            {
                nome: 'data',
                valido: dataEhValida,
                mensagem: 'Data deve ser maior ou igual data atual'
            },

            {
                nome: 'cliente',
                valido: clienteEhValido,
                mensagem: 'Cliente deve ter pelo menos cinco caracteres'
            }
        ]

        const erros = validacoes.filter(campo => !campo.valido)
        const existemErros = erros.length

        if(existemErros){
            res.status(400).json(erros)
        }else{
            const atendimentoDatado = {...atendimento, dataCriacao, data} //atendimento datado ...vem tudo que tem em atendimento
            const sql = 'INSERT INTO Atendimentos SET ?'//a query é o sql
            conexao.query(sql, atendimentoDatado, (erro, resultados) => {
                if(erro){
                    //console.log(erro)
                    res.status(400).json(erro)
                }else{
                    //console.log(resultados);
                    res.status(201).json(atendimento)
                }
            
            })
        }   
    }
}

module.exports = new Atendimento