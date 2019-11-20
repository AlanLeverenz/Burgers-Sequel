$(function() {

// add new burger (done in handlebars route.js) -----
$(".create-form").on("submit", function(event) {
    event.preventDefault();

    console.log($("#enter-burger").val());

    var newBurger = {
      name: $("#enter_burger").val().trim(),
      toppings: $("#enter_topping").val().trim()
    };

    // Send the POST request.
    $.ajax("/burgers/create", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        location.reload();
      }
    );
  });
});

