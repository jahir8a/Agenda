<?php

require("connection.php");
 $con = new ConnectionDB();

 
   if ($con->initConexion(DATABASE)) {
       
       
       try{
           if ($con->eliminarRegistro('eventos'," id = ".$_POST["id"])) {
               $response["msg"]= "OK";
           }
           else $response["msg"] = "Se ha producido un error en la eliminación";
       }catch(Exception $e){
           echo $e->getMessage();
       }
       finally{
           $con->cerrarConexion();
       } 
   }else {
       $response["msg"] = "Se presentó un error en la conexión";
   }

   echo json_encode($response);

 ?>
