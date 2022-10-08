<?php 
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");


include_once("Producto.php");

//obtención del metodo empleado por el cliente para hacer la petición
$metodo =  $_SERVER['REQUEST_METHOD'];

if($metodo == "GET"){

    //creación de objeto producto
    $producto = new Producto();
    $productos = array();
    //si la consulta trae algun parameto
        if(isset($_GET['param'])){
            $productos = $producto->consultarProductoLike($_GET['param']);
            
        }else{
            //si la consulta o trae parametros se consultan todos
          $productos =  $producto->consultarProductos();
        }
        // Se envia encabezado con el estado de la solicitud
        header("HTTP/1.1 200 OK");
        //codifico los datos en formato JSON
        echo json_encode($productos);
        exit();
}

if($metodo =="POST"){

    //se obtienen los contenidos de la petición 
    $postdata = file_get_contents("php://input");
    //se decofican los datos que vienen en JSON
    $request = json_decode($postdata);
    //Se crea el procuto  con los datos obtenidos
    $producto = new Producto();
    $producto->nombre= $request->nombre;
    $producto->precio= $request->precio;
    $producto->stock= $request->stock;
    $producto->estado= $request->estado;
    //se llama la función de registo
    $producto->registrarProducto();

    //se crean las cabeceras para la respuesta del servicio
    header("HTTP/1.1 200 OK");
    //se definen los contenidos de respuesta
    $request->recibido = 'OK';
    //se envian los contenidos en formato JSON
    echo json_encode($request);
    exit();
}

if($metodo =="DELETE"){

    $producto = new Producto();
    $producto->id= $_GET['id'];
    //se llama la función de registo
    $producto->eliminarProducto();

    //se crean las cabeceras para la respuesta del servicio
    header("HTTP/1.1 200 OK");
    //se definen los contenidos de respuesta
    $request = new stdClass();
    $request->recibido = 'OK';
    //se envian los contenidos en formato JSON
    echo json_encode($request);
    exit();
}

if($metodo =="PUT"){

    //se obtienen los contenidos de la petición 
    $postdata = file_get_contents("php://input");
    //se decofican los datos que vienen en JSON
    $request = json_decode($postdata);
    //Se crea el procuto  con los datos obtenidos
    $producto = new Producto();
    $producto->id= $request->id;
    $producto->nombre= $request->nombre;
    $producto->precio= $request->precio;
    $producto->stock= $request->stock;
    $producto->estado= $request->estado;
    //se llama la función de registo
    $producto->actualizarProducto();

    //se crean las cabeceras para la respuesta del servicio
    header("HTTP/1.1 200 OK");
    //se definen los contenidos de respuesta
    $request->recibido = 'OK';
    //se envian los contenidos en formato JSON
    echo json_encode($request);
    exit();
}




?>