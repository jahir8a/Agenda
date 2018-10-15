const http = require("http"),
    path = require("path"),
    express = require("express"),
    Routing = require("./rutas.js")
    bodyParser = require("body-parser"),
    mongoose = require("mongoose"),
    Operaciones = require("./CRUD.js"),
    md5 = require('md5');

const PORT = 3000
const app = express()


const Server = http.createServer(app)

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.use(express.static("./client"))
app.use("/events",Routing)

Server.listen(PORT,function(){
    console.log("Servidor ejecutandose en el puerto: "+PORT)
})
mongoose.connect('mongodb://localhost/agenda')


let data = {email:'jahir@eventos.com',nombre_completo:'jahir figueroa',psw:md5('123456'),fecha_nacimiento:'1992-12-04'}
Operaciones.insertarRegistro(data,(error,result)=>{
    if(error) console.log(error)
    console.log(result)
}) 