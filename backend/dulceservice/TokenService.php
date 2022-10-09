<?php 
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");

include_once("Token.php");

//obtención del metodo empleado por el cliente para hacer la petición
$metodo =  $_SERVER['REQUEST_METHOD'];

if($metodo == "POST"){
    //se obtienen los contenidos de la petición 
    $postdata = file_get_contents("php://input");
    //se decofican los datos que vienen en JSON
    $request = json_decode($postdata);
    //Se crea el token  con los datos obtenidos
    $token = new Token();
    $token->id_usuario = $request->id_usuario;
    $token->valor = $request->valor;
    //$token->fecha = date('Y-m-d H:i:s');

    $respuesta = [
        "valido" => "N",
    ];

    if ($token->buscarTokenValor) {
        $respuesta = [
            "valido" => "S",
        ];
    }

    //$token->registrar();

    $request->respuesta = $respuesta;

    //se crean las cabeceras para la respuesta del servicio
    header("HTTP/1.1 200 OK");
    //se definen los contenidos de respuesta
    $request->recibido = 'OK';
    //se envian los contenidos en formato JSON
    echo json_encode($request);
    exit();
}


