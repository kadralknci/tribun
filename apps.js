$( document ).ready(function() {
    var a=window.innerHeight;
    /*$(".menu-height" ).animate({height: a+"px"}, 500);*/
    $(".sr").height(a - 64);
    $(".sl").height(a - 64);
    
    $(".focus").height(a);
    $(".bth").click(function(){
        $(".focus").hide();
    });
});