<?php
include_once("Conexion.php");

class Publicacion{
    var $idPublicacion;
    var $id_producto;
    var $descripcion;
    var $likeP;
    var $comentario;
    var $estado;

    function __construct(){}

    function registrar(){
        $sql = "insert into publicacion(idPublicacion,id_producto,descripcion,likeP,comentario,estado) 
        values($this->idPublicacion,$this->id_Producto,'$this->descripcion',$this->likeP,'$this->comentario',$this->estado)";
        $conexion = new Conexion();
        if($conexion->executeQuery($sql)){
            $conexion->close();
            return true;
        }
    }

    function actualizarPublicacion(){
        $sql = "update publicacion set idPublicacion=$this->idPublicacion, id_producto=$this->id_producto, descripcion='$this->descripcion', likeP=$this->likeP, comentario='$this->comentario', estado=$this->estado";
        $conexion = new Conexion();
        if($conexion->executeQuery($sql)){
            $conexion->close();
            return true;
        }
    }

    function eliminarPublicacion(){
        $sql= "update publicacion set estado='0' where idPublicacion= $this->idPublicacion ";
        $conexion = new Conexion();
        if($conexion->executeQuery($sql)){
            $conexion->close();
            return true;
        }
    }

    function consultarPublicaciones(){
        $sql="select * from publicacion where estado = '1'";
        $conexion = new Conexion();
        $res = $conexion->executeQuery($sql);
        $publicaciones = array();

        while($p = $res->fetch_object()){
            array_push($publicaciones,$p);
        }
        $conexion->close();

        return $publicaciones;
    }
    function consultarPublicacionesLike($param){
        $sql="select * from publicacion where nombre likeP '%$param%' and estado = '1'";
        $conexion = new Conexion();
        $res = $conexion->executeQuery($sql);
        $publicaciones = array();
        while($p = $res->fetch_object()){
            array_push($publicaciones,$p);
        }
        $conexion->close();

        return $publicaciones;
    }

}
?>







