<?php 
    require("connection.php");
    $con = new ConnectionDB();
    $usuariosCreados = 0;
    $response["msg"]="";
    if ($con->initConexion(DATABASE)=='OK') {
        $filas = mysqli_num_rows($con->consultar(['usuarios'],['email']));
        if($filas==0){
        
        $usuario1 = array(
            "email"=>"'jahir@agenda.com'",
            "nombre_completo"=>"'jahir figueroa'",
            "psw"=>"'".md5("123456")."'",
            "fecha_nacimiento"=>"'1992-12-04'"
        );

        $usuario2 = array(
            "email"=>"'josue@agenda.com'",
            "nombre_completo"=>"'josue ochoa'",
            "psw"=>"'".md5("123456")."'",
            "fecha_nacimiento"=>"'1990-09-04'"
        );

        $usuario3 = array(
            "email"=>"'darlyn@agenda.com'",
            "nombre_completo"=>"'darlyn suazo'",
            "psw"=>"'".md5("123456")."'",
            "fecha_nacimiento"=>"'1996-06-04'"
        );
        try{
            
        if ($con->insertData('usuarios', $usuario1)) {
          $usuariosCreados++;
        }else{
            echo "error";
        }

        if ($con->insertData('usuarios', $usuario2)) {
            $usuariosCreados++;
        }

        if ($con->insertData('usuarios', $usuario3)) {
            $usuariosCreados++;
        }

        if($usuariosCreados>0){
            $response["msg"] = $usuariosCreados." Usuarios creados";
        }
    }catch(Exception $e){
        $response["msg"] = $e->getMessage();
    }
    finally{
        $con->cerrarConexion();
    } 
    }else{
        $response["msg"]=0;
    }
}
    
      else {
        echo "Se presentó un error en la conexión";
      }

      echo json_encode($response);

?>