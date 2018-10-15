<?php
 
 require("connection.php");
 $con = new ConnectionDB();

 
   if ($con->initConexion(DATABASE)) {
    $evento = [];
    if(isset($_POST["allDay"]) && !((bool)$_POST["start_date"])){
       $evento = array(
           " fecha_inicio"=>"'".$_POST["start_date"]."'",
           "hora_inicio"=>"'".$_POST["start_hour"]."'",
           "fecha_fin"=>"'".$_POST["end_date"]."'",
           "hora_fin"=>"'".$_POST["end_hour"]."'",
       );
    }else{
        $evento = array(
            " fecha_inicio"=>"'".$_POST["start_date"]."'"
        );
    }
       try{
           if ($con->actualizarRegistro('eventos', $evento," id = ".$_POST["id"])) {
               $response["msg"]= "OK";
           }
           else $response["msg"] = "Se ha producido un error en la actualización";
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
