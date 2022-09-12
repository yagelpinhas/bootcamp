/*Exercise 1 .
$.get('https://random-word-api.herokuapp.com/word')
    .then(function (word) {
        return $.get(`https://www.googleapis.com/books/v1/volumes?q=intitle:${word}`)
    })
    .then(function (book) {
        console.log(book)
    }) 
*/

//Exercise 2
$.get('https://random-word-api.herokuapp.com/word')
    .then(function (word) {
        let bookPromise = $.get(`https://www.googleapis.com/books/v1/volumes?q=intitle:${word}`)
        let imgPromise = $.get(`http://api.giphy.com/v1/gifs/search?q=${word}&api_key=50m5Set06jQuFMy7VNXir7iaNl8ypsEu`)
        Promise.all([bookPromise,imgPromise]).then(function(results){
            $("body").append(`<div> ${results[0].items[0].volumeInfo.title} </div>`)
            $("body").append(`<iframe src="${results[1].data[0].embed_url}">`)
        })
    })