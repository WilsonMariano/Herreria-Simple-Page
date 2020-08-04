<?php

    header("Access-Control-Allow-Origin: *");
    header('Content-type: application/json');
    
    $POST = file_get_contents("php://input");
    $data = json_decode($POST);
  
    
    $nombre = $data->nombre;
    $telefono = $data->telefono;
    $email = $data->email;
    $consulta = $data->consulta;

    $emailDestino = "mgw009@gmail.com";
    $asuntoDestino = "Contacto desde formulario web";
       

    $mensaje = "E-mail: " . $email .PHP_EOL. "Nombre: " . $nombre .PHP_EOL. "Teléfono: " . $telefono .PHP_EOL. "Consulta: " . $consulta;

    if(mail($emailDestino, $asuntoDestino, $mensaje)) {
        http_response_code(200);
        echo true;
    } else {
        http_response_code(500);
        echo false;
    }
?>