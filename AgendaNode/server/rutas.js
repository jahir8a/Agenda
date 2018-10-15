const Router = require("express").Router(),
md5 = require("md5"),
Operaciones = require("./CRUD.js")

Router.post('/login',function(req,res){
    let passEncriptada =md5(req.body.pass);
    let data = { usuario: req.body.user, pass : passEncriptada}  ;
    Operaciones.login(data,function(error,result){
        if(error){
            res.status(500)
            res.json(error)
        }
        res.json(result)
    })
})

Router.get('/all',function(req,res){
    let id = req.query.id
    Operaciones.consultarEventos(id,function(error,documents){
        if(error){
            res.status(500)
            res.json(error)
        }
        res.json(documents.map((value,index,array)=>{
            return {
                id:value._id,
                title:value.titulo,
                start:value.fecha_inicio,
                end:value.fecha_fin,
                allDay:value.dia_completo
                
                
            }
        }))
    })
})

Router.post('/new',function(req,res){
    console.log(req.body);
    let event = {
        titulo:req.body.title,
        fecha_inicio:req.body.start,
        hora_inicio:req.body.start_hour,
        fecha_fin:req.body.end,
        hora_fin:req.body.end_hour,
        dia_completo: req.body.allDay,
        usuario: req.body.id
    }
    
    Operaciones.insertarEvento(event,(error,result)=>{
        if(error){
            res.status(500)
            res.json(error)
        }
		res.json("Registro guardado exitosamente")
    })
})

Router.post('/edit',function(req,res){
    
    let event = {
        fecha_inicio:req.body.start,
        fecha_fin:req.body.end,
    }
    
    Operaciones.consultarYActualizar(req.body.id,event,(error,result)=>{
        if(error){
            res.status(500)
            res.json(error)
        }
		res.json(result)
    })
})

Router.post('/delete/:id',function(req,res){
    let id = req.params.id;
    console.log(id)
    Operaciones.eliminarRegistro(id,(error,result)=>{
        if(error){
            res.status(500)
            res.json(error)
        }
		res.json(result)
    })
})


module.exports = Router