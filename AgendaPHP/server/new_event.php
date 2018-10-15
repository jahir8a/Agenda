<?php
  
  require("connection.php");
  $con = new ConnectionDB();

  
    if ($con->initConexion(DATABASE)) {
        
        $evento = array(
            "titulo"=>"'".$_POST["titulo"]."'",
            " fecha_inicio"=>"'".$_POST["start_date"]."'",
            "hora_inicio"=>"'".$_POST["start_hour"]."'",
            "fecha_fin"=>"'".$_POST["end_date"]."'",
            "hora_fin"=>"'".$_POST["end_hour"]."'",
            "dia_completo"=>$_POST["allDay"],
            "fk_usuario"=>"'".$_POST["username"]."'"
        );
        try{
            if ($con->insertData('eventos', $evento)) {
                $response["msg"]= "OK";
            }
            else $response["msg"] = "Se ha producido un error en la inserción";
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
