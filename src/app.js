import express from 'express'
import db from './config/dbConnect.js'
import routes from './routes/index.js'
import {dirname, } from 'path'


db.on('erro', console.log.bind(console, 'Error de conexão'))
db.once("open", () =>{
    console.log('conexão com o banco feita com sucesso!!')
})

const app = express()

app.use(express.json())

app.set('views', '/workspace/API-rest/src/view/');
//app.set('view engine', 'hbs');

routes(app)

export default app