<?php 
include_once("Conexion.php");

class Usuario{
    var $id;
    var $nombre;
    var $apellido;
    var $email;
    var $direccion;
    var $birthDate;
    var $numCelular;
    var $password;
    var $estado;


    function __construct(){}


    function registrarUsuario(){
        $sql="insert into usuario(nombre,apellido,email,direccion,birthDate,numCelular,password,estado) values('$this->nombre','$this->apellido','$this->email','$this->direccion','$this->birthDate','$this->numCelular','$this->password',$this->estado)";
        $conexion = new Conexion();
        if($conexion->executeQuery($sql)){
            $conexion->close();
            return true;
        }
    }

    function actualizarUsuario(){
        $sql= "update usuario set nombre='$this->nombre', apellido='$this->apellido', email='$this->email', direccion = '$this->direccion', birthDate = '$this->birthDate', numCelular = '$this->numCelular', password = '$this->password', estado = $this->estado where id =$this->id";
        $conexion = new Conexion();
        if($conexion->executeQuery($sql)){
            $conexion->close();
            return true;
        }
        
    }

    
    function eliminarUsuario(){
        $sql= "update usuario set estado='0' where id= $this->id ";
        $conexion = new Conexion();
        if($conexion->executeQuery($sql)){
            $conexion->close();
            return true;
        }
        
    }

    function consultarUsuarios(){
        $sql="select * from usuario where estado = '1'";
        $conexion = new Conexion();
        $res = $conexion->executeQuery($sql);
        $usuarios = array();

        while($p = $res->fetch_object()){
            array_push($usuarios,$p);
        }
        $conexion->close();

        return $usuarios;
    }

    function consultarUsuarioLike($param){
        $sql="select * from usuario where nombre like '%$param%' and estado = '1'";
        $conexion = new Conexion();
        $res = $conexion->executeQuery($sql);
        $usuarios = array();
        while($p = $res->fetch_object()){
            array_push($usuarios,$p);
        }
        $conexion->close();

        return $usuarios;
    }

    function consultarUsuarioCorreo(){
        $sql = "select * from usuario where email = '$this->email'";
        $conexion = new Conexion();
        $res = $conexion->executeQuery($sql);
        $usuario = null;
        if($p = $res->fetch_object()){
            $usuario = $p;
        }
        $conexion->close();

        return $usuario;
    }

}


?>