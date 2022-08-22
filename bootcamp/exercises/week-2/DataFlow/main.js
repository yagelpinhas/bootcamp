posts=[{name: "Danielle", text:"I'm Danielle"},{name:"Adi", text: "I'm Adi"}]

const render = function() {
    $("#form").empty()
    for(let i = 0 ; i < posts.length ; i ++){
        let currentPost = posts[i]
        $("#form").append(`<div class ="post"> ${currentPost.name}:${currentPost.text} </div>`)
    }
}



$("button").on("click", function () {
    name_i = ($("#name-input").val())
    text_i = ($("#text-input").val())
    let post = {}
    post.name = name_i
    post.text = text_i
    posts.push(post)
    render()
})


$("#form").on("click", ".post", function() {
    console.log($(this).text())
    let str = $(this).text()
    let arr = str.split(":")
    let name_i = arr[0]
    let indexToRemove = -1
    for(let i = 0; i < posts.length ; i ++){
        if(posts[i].name == name_i){
            indexToRemove = i 
        }
    }
    posts.splice(indexToRemove,1)
    render()
  });

