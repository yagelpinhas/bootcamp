const fruits = [
    { name: "Orange", color: "orange" },
    { name: "Banana", color: "yellow" },
    { name: "Coconut", color: "brown" },
    { name: "Kiwi", color: "brown" },
    { name: "Lemon", color: "yellow" },
    { name: "Cucumber", color: "green" },
    { name: "Persimmon", color: "orange" },
    { name: "Pumpkin", color: "orange" }
  ]

  for(let i=0;i<fruits.length;i++){
    let name = fruits[i].name
    let color = fruits[i].color
    $("#basket").append(`<div class="${color}"> "${name}" </div>`)
  }