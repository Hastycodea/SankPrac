$(document).ready(function() {
    $("#about").click(function() {
        
        if($(this).html() === "you clicked me!") {
            $(this).html("you clicked me again!");
        } else {
            $(this).html('you clicked me!');
        }
        
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

    $("#getjson").click(function() {
        $.ajax({url: 'games.json', success: function(result) {
            $("#about").html(JSON.stringify(result, null, 4));
        }});
    });

    $("#getgame").click(function() {
        $.ajax({url: 'games.json', success: function(result) {
            var game = result.games[0].genre;
            $("#about").html(game);
        }});
    });

    $("#allgames").click(function() {
        $.ajax({
            url: 'games.json',
            success: function(result) {
                var games = result.games;
                var gamesList = '';

                games.forEach(function(game) {
                    gamesList += game.title + "<br>";
                });

                $("#about").html(gamesList);
            }
        });
    });
}); 