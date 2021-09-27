const conexao = require('../infraestrutura/conexao')
class Atendimento {

    adiciona(atendimento){ //método precisa receber os dados. Qual o atendimento para salvar?
        const sql = 'INSERT INTO Atendimentos SET ?'//a query é o sql
        conexao.query(sql,atendimento, (erro, resultados) => {
            if(erro){
                console.log(erro)
            }else{
                console.log(resultados);
            }
        })
    }

}

module.exports = new Atendimento