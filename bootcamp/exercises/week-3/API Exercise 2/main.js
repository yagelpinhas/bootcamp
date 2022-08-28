const fetch = function (queryType,queryValue) {
    $.ajax({
        method: "GET",
        url: `https://www.googleapis.com/books/v1/volumes?q=${queryType}:${queryValue}`,
        success: function (result) {
             console.log(result.items[0].volumeInfo)
        },
        error: function (xhr, text, error) {
            console.log(text)
        }
    })
}