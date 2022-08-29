
/*localStorage.setItem('name', 'Shoobert');
localStorage.removeItem('name')
localStorage.clear()

let userStorage = {
    darkMode: true,
    showSideNav: false,
    defaultResultCount: 9,
    latestMarks: {
        sectionA: 92,
        sectionB: 11
    },
    cart: [
        { id: 3112, count: 2 },
        { id: 812, count: 16 }
    ]
}

userStorage = JSON.stringify(userStorage)
localStorage.setItem('userStorage',userStorage)
*/
let check = -1
let current=0
wisdom = []
$("#add").click(function(){
    let str = $("#input").val();
    $("#items").append(`<div><span class="item">
    ${str}
    </span>
    <button class="x" id="${current}">x</button>
    </div>`)
    wisdom.push({text: str, id: current})
    current=current+1
    if(wisdom.length%2!=0){
        let strWisdom=JSON.stringify(wisdom)
        localStorage.setItem('wisdom',strWisdom)
    }
})

$("#clear").click(function(){
    localStorage.removeItem('wisdom')
})



$("body").on("click", ".x", function () {
    console.log("entered here")
    let relevantId = $(this).attr("id")
    let relevantIndexToDelete
    for(let i=0;i<wisdom.length;i++){
        if(wisdom[i].id==relevantId){
            relevantIndexToDelete=i
        }
    }
    wisdom.splice(relevantIndexToDelete,1)
    let strWisdom=JSON.stringify(wisdom)
    localStorage.setItem('wisdom',strWisdom)
})


window.addEventListener('load', (event) => {
    current = 0
    let data = JSON.parse(localStorage.wisdom)
    for(let i=0;i<data.length;i++){
        let str= data[i].text
        $("#items").append(`<div><span class="item">
        ${str}
        </span>
        <button class="x" id="${current}">x</button>
        </div>`)
        wisdom.push({text: str, id: current})
        current=current+1
    }
  });
  
  