const box = document.getElementById("box")

const enterColor = function () {
    box.style.backgroundColor = "#c0392b"
    box.innerHTML = "AHH GO AWAY"
}

const leaveColor = function () {
    box.style.backgroundColor = "#1abc9c"
    box.innerHTML = "Hover over me!"
}

const clickColor = function() {
    box.style.backgroundColor="#8e44ad"
}

box.onclick = function () {
    box.innerHTML = "clicked"
}

box.onmouseenter=function(){
    box.innerHTML = "hello there"
}

const boxi = document.createElement("div") // dynamically creating an element

boxi.setAttribute("class", "box")
boxi.onclick = function(){       // adding an event to the new element
    boxi.innerHTML = "I'm alive!"
}

document.getElementById("some-id").appendChild(boxi) // now the box will be on the page, and will react to a click!