/*
$(".item").click(function () {
    
    if ($(this).data().instock) {
        $("#cart").append(`<div class="cart-item">${$(this).text()}</div>`)
    }
}) 

*/

let melonCounter = 1
    let shoeCounter = 1
    

    $(".item").click(function () {
    

        if ($(this).data().instock) {
    

            if ($(this).text() === "Shoe") {
    

                if (shoeCounter === 1) {
                    $("#cart").append(`<div class="cart-item shoe">${$(this).text()}</div>`)
                    shoeCounter++
                } else {
                    $(".shoe").remove()
                    $("#cart").append(`<div class="cart-item shoe">${$(this).text()} x${shoeCounter}</div>`)
                    shoeCounter++
                }
    

            } else if ($(this).text() === "Melon") {
                if (melonCounter === 1) {
                    $("#cart").append(`<div class="cart-item melon">${$(this).text()}</div>`)
                    melonCounter++
                } else {
                    $(".melon").remove()
                    $("#cart").append(`<div class="cart-item melon">${$(this).text()} x${melonCounter}</div>`)
                    melonCounter++
                }
            }
    

        }
    })
    

    $("#cart").on("click", ".cart-item", function () {
        $(this).remove()
    })