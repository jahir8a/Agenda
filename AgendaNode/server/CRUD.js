let User = require('./usuarios.js')
let Event = require('./eventos.js')

module.exports.insertarRegistro = function(data,callback){
    User.findOne({email:"jahir@eventos.com"}).exec(function(err, user) {
        if (err) throw err;
        if(!user){
            let user  = new User(data)
    
            user.save((error)=>{
                if(error) callback(error)
                callback(null,"Registro guardado")
            })
        }
    });
    
}

module.exports.insertarEvento = function(data,callback){
    let event  = new Event(data)

    event.save((error)=>{
        if(error) callback(error)
        callback(null,"Registro guardado")
    })
}

module.exports.eliminarRegistro = function(id,callback){
    Event.remove({_id:id},(error)=>{
        if(error) callback(error)
        callback(null,"Se elimino el registro correctamente")
    })
}

module.exports.consultarEventos = function(id,callback){
    Event.find({usuario:id}).exec(function(error,documents){
        if(error) callback(error)
        callback(null,documents)
    })
}

module.exports.login = function(data,callback){
    User.findOne({email:data.usuario,psw:data.pass}).exec(function(error,documents){
        if(error) callback(error)
        if(documents){
            callback(null,{msg:"Validado",id:documents._id})
        }else{
            callback(null,{msg:"Usuario o contraseña incorrectos"})
        }
    })
}

module.exports.consultarYActualizar = function(id,data,callback){
 
   Event.findByIdAndUpdate(id, 
     data , 
    function(error, evento) {
        if(error) callback(error)
        callback(null,"Evento actualizado con éxito")
    })
}