$("#container").on("click",function () {
    $(this).css("background-color","yellow");
    
})

$.ajax({
    method: "GET",
    url: `http://data.nba.net/10s/prod/v1/2016/players.json`,
    success: function (result) {
         console.log(result)
    },
    
})