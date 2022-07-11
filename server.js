import app from './src/app.js'
// Porta de acesso ao servidor
const port = process.env.PORT || 3000;


app.listen(port, ()=> {
    console.log(`Servidor escutando em http://localhost:${port}`)
})