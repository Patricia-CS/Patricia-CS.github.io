$(document).ready(function(){
    $(".hamburguesa").click(function(){
        $(".desplegable").addClass("move");
    });
    $(".X").click(function(){
        $(".desplegable").removeClass("move");
    });
});