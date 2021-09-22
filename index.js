const customExpress = require('./config/customExpress')

const app = customExpress()
const PORT = 8080;

app.listen(PORT, () => console.log(`Servidor na porta ${PORT}`))
app.get('/', (req, res)=> res.send(`Teste de servidor na porta ${PORT}`))

