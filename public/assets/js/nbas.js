$(function(){
    $(".change-trade").on("click", function(event){
        var id = $(this).data("id");
        var isTraded = $(this).data("isTraded");

        var newTradeStatus = {
            traded: isTraded
        };

        $.ajax("/api/players/" + id, {
            type: "PUT",
            data: newTradeStatus
        }).then(
            function() {
                console.log("change traded to", isTraded);
                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function(event){
        event.preventDefault();

        var newPlayer = {
            player: $("#play").val().trim(),
            traded: $("[name=traded]:checked").val().trim()
        };

        $.ajax("/api/players", {
            type:"POST",
            data: newPlayer
        }).then(
            function(){
                console.log("create new player");
                location.reload();
            }
        );
    });
});