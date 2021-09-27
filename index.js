const customExpress = require('./config/customExpress')
const conexao = require('./infraestrutura/conexao')
const Tabelas = require('./infraestrutura/tabelas')

const PORT = 8081;

//app.get('/', (req, res)=> res.send(`Teste de servidor na porta ${PORT}`))

conexao.connect(erro =>{
    if(erro) {
        console.log(erro);
    } else {
        console.log("SUCESSO");
        
        Tabelas.init(conexao)
        
        const app = customExpress()
        app.listen(PORT, () => console.log(`Servidor na porta ${PORT}`));
    }
})
