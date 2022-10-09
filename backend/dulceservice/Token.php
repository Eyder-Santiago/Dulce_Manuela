<?php 
include_once("Conexion.php");

class Token{
    var $id_usuario;
    var $valor;
    var $fecha;

    function __construct(){}

    function registrar() {
        $sql = "insert into token(id_usuario,valor,fecha) values('$this->id_usuario', '$this->valor', '$this->fecha')";
        $conexion = new Conexion();
        if($conexion->executeQuery($sql)){
            $conexion->close();
            return true;
        }
    }

    function borrarTokens(){
        $sql= "delete from token where id_usuario = $this->id_usuario";
        $conexion = new Conexion();
        if($conexion->executeQuery($sql)){
            $conexion->close();
            return true;
        }
    }

    function buscarToken(){
        $sql="select * from token where id_usuario = $this->id_usuario and fecha >= cast((now() + interval -(30) day) as date) limit 0, 1";
        $conexion = new Conexion();
        $res = $conexion->executeQuery($sql);
        $token = null;

        while($t = $res->fetch_object()){
            $token = $t;;
        }
        $conexion->close();

        return $token;
    }

    function buscarTokenValor(){
        $sql="select * from token where id_usuario = $this->id_usuario and valor = '$this->valor' and fecha >= cast((now() + interval -(30) day) as date) limit 0, 1";
        $conexion = new Conexion();
        $res = $conexion->executeQuery($sql);
        $token = null;

        while($t = $res->fetch_object()){
            $token = $t;;
        }
        $conexion->close();

        return $token;
    }
}
