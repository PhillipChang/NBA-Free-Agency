$(function(){
    $(".change-trade").on("click", function(event){
        var id = $(this).data("id");
        var traded = $(this).data("traded");
        $(document).ready(function(){
             $('.modal').modal();
        $("#yes").on("click",function(){
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
        $("#no").on("click",function(){
            location.reload();
        });  
        });
    });

    $(".create-form").on("submit", function(event){
        event.preventDefault();
        var check = true;
        if($("#play").val() === ""){
            check = false;
        }
        else {
            check=true;
        }

        if(check === true){
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
    }
    else {
        alert("You have not filled out player's name");
    }
    });


    $(".delete").on("click", function(event) {

        var id = $(this).data("id");
        var queryURL = "/api/players/" + id
    
        // Send the DELETE request.
        $.ajax(queryURL,{
          type: "DELETE"
        }).then(function(res){
            console.log("deleted id ", id);
            // Reload the page to get the updated list
            location.reload();
          })
      });
});