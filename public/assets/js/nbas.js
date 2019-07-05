$(function(){
    $(".change-trade").on("click", function(event){
        var id = $(this).data("id");
        var traded = $(this).data("traded");

        var newTradeStatus = {
            traded: traded
        };

        $.ajax("/api/players/" + id, {
            type: "PUT",
            data: newTradeStatus
        }).then(
            function() {
                console.log("change traded to", newTradeStatus);
                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function(event){
        event.preventDefault();

        var newPlayer = {
            name: $("#play").val().trim(),
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