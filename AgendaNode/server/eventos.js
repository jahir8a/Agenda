let mongoose = require("mongoose")
let Schema = mongoose.Schema

let eventSchema = new Schema({
    titulo : {type:String,required:true},
    fecha_inicio : {type:Date,required:true},
    hora_inicio : {type:String,required:false},
    fecha_fin : {type:Date,required:false},
    hora_fin : {type:String,required:false},
    dia_completo: {type:Boolean,required:true},
    usuario:{ type: Schema.Types.ObjectId, ref: "User" }
})

//let Event = mongoose.model('Event',userSchema)

module.exports = mongoose.model('Event',eventSchema)

