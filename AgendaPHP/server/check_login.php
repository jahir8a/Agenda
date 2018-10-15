<?php

require("connection.php");
$con = new ConnectionDB();
$response['conexion'] = $con->initConexion(DATABASE);
$username = $_POST['username'];
$password = $_POST['password'];

  if ($response['conexion']=='OK') {
    $resultado_consulta = $con->consultar(['usuarios'],
    ['email', 'psw'], "WHERE email='".$username."' AND psw='".md5($password)."'");
    // $resultado_consulta = $con->consultar(['usuarios'],
    // ['email', 'psw'], 'WHERE email="'.$_POST['username'].'" AND psw="'.$_POST['passw'].'"');

    if ($resultado_consulta->num_rows != 0) {
      $response['msg'] = 'concedido';
    }else $response['msg'] = 'rechazado';
  }

  echo json_encode($response);

  $con->cerrarConexion();

 ?>
