$("body").append("<div class='box' id='box1'> </div>")
$("body").append("<div class='box' id ='box2'> </div>")

$("#box1").hover(function () {
    $("#box2").css('background-color', 'red')
    $("#box1").css('background-color', 'purple')
})

$("#box2").hover(function () {
    $("#box1").css('background-color', 'red')
    $("#box2").css('background-color', 'purple')
})
