const cors = require('cors')
const express = require(`express`)
const mongoose = require(`mongoose`)
const bodyParser = require('body-parser')

require(`dotenv`).config()


const app = express()
const port = 3000

app.use(cors({
  origin:"*",
  methods:"GET,HEAD,POST,PATCH,PUT,DELETE",
  credentials: true,
  preflightContinue: false,
  optionsSuccessStatus: 204,
}))

app.use(express.json())
app.set('view engine', 'ejs')
app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())


const heroRoutes = require ('./routers/hero')
app.use('/asisthero',heroRoutes)

mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGO_DB_URI)
.then(()=>
console.log("Conexion to DB"))
.catch((err)=>
  console.error(err));

  app.get('/',(req,res) => {
    res.send('welcome to the hero library')
})

app.listen(port, ()=>{
  console.log("-------------------------------------------")
  console.log(`Server on port ${port}:`, `http://localhost:${port}/`)
  console.log("-------------------------------------------")
})








