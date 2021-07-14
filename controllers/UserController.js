const User = require('../models/User');

function create(req, res) {
   var user = new User();
    var params = req.body;

    user.firstname = params.firstname;
    user.lastname = parmas.lastname;
    user.email = params.email;
    user.age = params.age;

    user.save((error, userCreated) => {
      if (error) {
          res.status(500).send({
              statusCode: 500,
              message: "Error en el servidor"

          })


     }else{
        if(!userCreated) {
               res.status(400).send({
                   statusCode: 400,
                   message: "Error al insertar el usuario"
             })
             
        }else{
           res.status(200).send({
               statusCode: 200,
               message: "Usuario almacenado correctamente",
               dataUser: userCreated
           })    
        }
        
    }
    })


}   

function update(req, res) {
var parameters = req.body;
var idUser = req.params.idUser;

User.findByIdAndUpdate( idUser, parameters, (error, userUpdate) => {
     if(error) {
      res.status(500).send({
      statusCode:500,
      message: "Error en el servidor"
     })
 } else {
        if(!UserUdated) {
            res.status(400).send({
            statusCode: 400,
             message: "Error al actualizar el usuario"
         })
    }else{
      res.status(200).send({
        statusCode: 200,
       message: "Usuario actualizado correctamente"
    
      })
    
    }   
 }
})
}  
function remove(req, res) {
 var idUser = req.params.idUser;

  User.findByIdAndDelete( idUser, (error, userRemoved) => {
      if(error){
       res.status(500).send({
           statusCode: 500,
           message:"Error en el servidor"
    
       })
      } else {
          if(!userRemoved){
          res.status(400)
        }
       }
    })
}
module.exports = {
    create
}