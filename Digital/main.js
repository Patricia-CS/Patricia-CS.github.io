$(document).ready(function(){
    $(".hamburguesa").click(function(){
        $(".oculto").addClass("desplegar");
    });
    $(".ex").click(function(){
        console.log("hola");
        $(".oculto").removeClass("desplegar");
    });
    $(".portfolio li").click(function(){
        $info = $(this).attr("data-text");
        $(".cuadrado").removeClass("desaparece");
        $("."+$info).addClass("desaparece");
    });
});