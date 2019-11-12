$(function() {

$(".create-form").on("submit", function(event) {
    event.preventDefault();

    console.log($("#enter-name").val());

    var newBurger = {
      name: $("#enter-name").val().trim(),
      topping: $("#enter-topping").val().trim()
    };

    // Send the POST request.
    $.ajax("/burgers/create", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});