$("button").on("click", function () {
    name = ($("#my-input").val())
    $("ul").append(`<li>${name}</li>`);
})

$("ul").on("click", "li", function() {
    $(this).remove();
  });