
$("button").on("click", function () {
    let address = $("#addr-input").val()
    let minPrice = $("#min-p-input").val()
    let maxPrice = $("#max-p-input").val()
    let minRooms = $("#min-r-input").val()
    let maxRooms = $("#max-r-input").val()
    let immediate = $("#immed-y")
    let parking_bool = $("#park-y").prop('checked')

    let relevantApts = findRelevantApts(address, minPrice, maxPrice, minRooms, maxRooms, immediate,parking_bool)
    renderApts(relevantApts)
})


var source = $('#apartment-template').html();
var template = Handlebars.compile(source);


const renderApts = function (apartments) {
    $("#results").empty()
    console.log(apartments) //array of apartments to render
    //Your code goes here.
    var newHTML = template({array: apartments});
     $("#results").append(newHTML)
    
}



renderApts(apartments) //renders apartments when page loads

