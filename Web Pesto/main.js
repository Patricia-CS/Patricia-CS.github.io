$(document).ready(function(){
    $(".menu li").click(function(){
        $carta = $(this).attr("data-menu");
        $(".menu li").removeClass("activo");
        $(this).addClass("activo");
        $(".carta").removeClass("activo");
        $("#"+$carta).addClass("activo");
    });
});