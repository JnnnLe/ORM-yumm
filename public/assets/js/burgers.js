$(function() {

  $(".change-de").on("click", function(event) {
    var id = $(this).data("id");
    var newEat = $(this).data("newEat");
    var newEatState = {
      isDevoured: newEat
  };

  location.reload();

  $.ajax("/api/burgers/" + id, {
    type: "PUT",
    data: newEatState
  }).then(
    function() {
      console.log("Changed devoured to ", newEat);
    }
  );
});

  $(".create-form").on("submit", function(event) {
    event.preventDefault();
    var newBurger = {
      burger_name: $("#bu").val().trim(),
      isDevoured: $("[name=name]").val().trim()
    }

    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        location.reload()
    });
  });
});
