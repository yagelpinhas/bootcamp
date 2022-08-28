const fetch = function (queryType,queryValue) {
    $.ajax({
        method: "GET",
        url: `https://www.googleapis.com/books/v1/volumes?q=${queryType}:${queryValue}`,
        success: function (result) {
             result.items.forEach(element => {
                console.log(element.volumeInfo.title)
                console.log(element.volumeInfo.authors)
             });
        },
        error: function (xhr, text, error) {
            console.log(text)
        }
    })
}