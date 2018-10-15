<?php
  
  require("connection.php");
  $con = new ConnectionDB();
  $response['msg'] = $con->initConexion(DATABASE);
  
    if ($response['msg']=='OK') {
      $resultado_consulta = $con->consultar(['eventos'],
      ['eventos.id','eventos.titulo','eventos.fecha_inicio','eventos.fecha_fin','eventos.hora_inicio','eventos.hora_fin','eventos.dia_completo']," WHERE eventos.fk_usuario = '".$_GET["username"]."'"," INNER JOIN usuarios on eventos.fk_usuario=usuarios.email ");

      if ($resultado_consulta->num_rows != 0) {
        while($row=mysqli_fetch_assoc($resultado_consulta))
        {
         $data[] = array(
          'id'   => $row["id"],
          'title'   => $row["titulo"],
          'start'   => $row["fecha_inicio"]." ".$row["hora_inicio"],
          'end'   => $row["fecha_fin"]." ".$row["hora_fin"],
         );
        }
        $response["eventos"] = $data;
      }else $response['eventos'] = '[]';
    }
  
    echo json_encode($response);
  
    $con->cerrarConexion();
  
   ?>
