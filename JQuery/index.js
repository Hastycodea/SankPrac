$(document).ready(function() {
    $("#about").click(function() {
        $(this).html('you clicked me!');
    });

    $("#about").hover(function() {
        $(this).css('background-color', 'lightblue');
    });

    $("#about").mouseleave(function(){
        $(this).css('background-color', 'lightgreen');
    });

    $("#show").click(function(){
        $("#about").show();
    });

    $("#hide").click(function(){
        $("#about").hide();
    });

    $("#toggle").click(function(){
        $("#about").toggle();
    });

    $(".power").keyup(function (){
        $("#about").html($(this).val());
    });
}); 