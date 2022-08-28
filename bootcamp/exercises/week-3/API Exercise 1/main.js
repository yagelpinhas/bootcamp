const fetch = function (isbn) {
    $.ajax({
        method: "GET",
        url: `https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`,
        success: function (result) {
             console.log(result.items[0].volumeInfo.title)
        },
        error: function (xhr, text, error) {
            console.log(text)
        }
    })
}