<?php 
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");

include_once("Usuario.php");
include_once("Token.php");

//obtención del metodo empleado por el cliente para hacer la petición
$metodo =  $_SERVER['REQUEST_METHOD'];

if($metodo =="POST"){
    //se obtienen los contenidos de la petición 
    $postdata = file_get_contents("php://input");
    //se decofican los datos que vienen en JSON
    $request = json_decode($postdata);
    //Se crea el usuario  con los datos obtenidos
    $usuario = new Usuario();
    $usuario->email= $request->email;
    $usuario->password= $request->password;

    $respuesta = [
        'valida' => '',
        'mensaje' => '',
        'token' => '',
        'id_usuario' => null,
    ];

    //se llama la función de buscar usuario con correo
    if ($usuarioLogin = $usuario->consultarUsuarioCorreo()) {
        if ($usuarioLogin->estado == 0) {
            $respuesta['valida'] = 'N';
            $respuesta['mensaje'] = 'El usuario no es válido';
        }
        elseif ($usuarioLogin->password != $usuario->password) {
            $respuesta['valida'] = 'N';
            $respuesta['mensaje'] = 'El password no es válido';
        }
        else {
            $respuesta = [
                'valida' => 'S',
                'mensaje' => 'OK',
                'token' => uniqid(),
                'id_usuario' => $usuarioLogin->id,
            ];

            $token = new Token();            
            $token->id_usuario = $usuarioLogin->id;
            $token->valor = $respuesta['token'];
            $token->fecha = date('Y-m-d H:i:s');
            $token->borrarTokens();
            $token->registrar();
        }
    }
    else {
        $respuesta['valida'] = 'N';
        $respuesta['mensaje'] = 'El correo no es válido';
    }

    $request->respuesta = $respuesta;

    //se crean las cabeceras para la respuesta del servicio
    header("HTTP/1.1 200 OK");
    //se definen los contenidos de respuesta
    $request->recibido = 'OK';
    //se envian los contenidos en formato JSON
    echo json_encode($request);
    exit();
}
