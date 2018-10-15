let mongoose = require("mongoose")
let Schema = mongoose.Schema

let userSchema = new Schema({
    email : {type:String,required:true},
    nombre_completo : {type:String,required:true},
    psw : {type:String,required:true},
    fecha_nacimiento: {type:Date, required:true}
})

//let User = mongoose.model('User',userSchema)

module.exports = mongoose.model('User',userSchema)

