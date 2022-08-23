/*
$("button").on("click", function(){
    console.log($(".container").find("p").text())
  })
  
  $("button").on("click", function(){
    console.log($(this).closest("div").find("span").text())
  })
  $(".remove").on("click", function(){
    alert($(this).closest(".post").data().id)
  })
  $('button').on('click', function() {
    let relevantInputValue = $(this).closest("div").find("input").val()
    alert(relevantInputValue)
  })
*/

let arr=[]
  
  $(".generator").on('click', function() {
    console.log($(this).closest("div").attr('id'));
    console.log($(this).closest(".computer").data().id)
    let obj = {}
    obj.cmp_id = $(this).closest(".computer").data().id
    arr.push(obj)
    console.log($(this).closest(".computer").find(".BUS").text())

  })


  $(".validator").on('click', function() {
    //generator's text
    //mb 
    //both qr's 
    console.log($(this).closest(".computer").find(".generator").text());
    console.log($(this).closest(".computer").find(".MB").text());
    const posts = $(this).closest(".computer").find(".QR")
    console.log($(this).closest(".computer").find(".QR").eq(0).text());
    console.log($(this).closest(".computer").find(".QR").eq(1).text());
  })