/*
var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=cat&api_key=9ZskTxpTKBPDhufWfUwKlY7HS6m26uik&limit=5",function(data){
    let giphy = data.data[0].embed_url;
    $("body").append(`<iframe src=${giphy}>  </iframe>`)
})

*/

$("#button").click(function(){
    let searchValue = $("#input").val();

    
    var xhr = $.get(`http://api.giphy.com/v1/gifs/search?q=${searchValue}&api_key=9ZskTxpTKBPDhufWfUwKlY7HS6m26uik&limit=5`,function(data){
    let giphy = data.data[0].embed_url;
    $("body").append(`<iframe src=${giphy}>  </iframe>`)
    })

})