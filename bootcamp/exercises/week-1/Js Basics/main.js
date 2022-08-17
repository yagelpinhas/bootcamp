
/*Exercise 1 + Execise 2 
const names = ["Ashley", "Donovan", "Lucas"]
const ages = [23, 47, 18]
const people = []

for(let i=0;i<names.length;i++){
    let obj={
        name:names[i],
        age:ages[i]
    }
    people.push(obj)
    console.log(obj.name+" is "+obj.age+" years old")
}
*/

/* Exercise 3 
const posts = [
    {id: 1, text: "Love this product"},
    {id: 2, text: "This is the worst. DON'T BUY!"},
    {id: 3, text: "So glad I found this. Bought four already!"}
  ]

  for(let i=0;i<posts.length;i++){
    if (posts[i].id==2){
        posts.splice(i,1);
    }
  }
  console.log(posts)
*/

/*Exercise 4 
const posts = [
    {
      id: 1, 
      text: "Love this product",
      comments: []
    },
    { 
      id: 2, 
      text: "This is the worst. DON'T BUY!", 
      comments: [
                  {id: 1, text: "Idiot has no idea"}, 
                  {id: 2, text:"Fool!"}, 
                  {id: 3, text: "I agree!"}
                ]
     },
     {
      id: 3, 
      text: "So glad I found this. Bought four already!",
      comments: []
     }
  ]

  // removing comment 3 in post 2 
  for(let i=0;i<posts.length;i++){
    if(posts[i].id==2){
        for(let j=0;j<posts[i].comments.length;j++){
            if(posts[i].comments[j].id==3){
                posts[i].comments.splice(j,1);
            }
        }
    }
  }

  console.log(posts);

  /*

  /* Exercise 5  
  const dictionary = {
    "A": ["Aardvark", "Abacus", "Actually", "Atomic"],
    "B": ["Banana", "Bonkers", "Brain", "Bump"],
    "C": ["Callous", "Chain", "Coil", "Czech"]
  }
  for(let item in dictionary){
    console.log("words that start with " + item + ":\n");
    for(let i=0;i<dictionary[item].length;i++){
        console.log(dictionary[item][i]);

    }
  }

  */


/*
const isEven=function(num){
    if (num%2==0){
        return true
    }
    else{
        return false
    }
}

const loopi=function(scores){
    for (let i = 0; i < scores.length; i++) {
        if(!isEven(scores[i]))
        console.log(scores[i]);
    }
}

const exits=function(scores,number){
    for (let i = 0; i < scores.length; i++) {
        if(scores[i]==number){
            return true
        }
            
    }
    return false
}

let calculator={
    add:function(a,b){
        return a+b
    },
    subtract:function(a,b){
        return a-b
    }
}

const increaseByNameLength=function(a,b){
    return a+b
}

const makeRegal=function(name){
    return name.toLowerCase()
}
const turnToKing = function(name, money){
    name = name.toUpperCase()
    money = increaseByNameLength(money, name)
    name = makeRegal(name)

    console.log(name + " has " + money + " gold coins")
}

turnToKing("martin luther", 100) // should print "His Royal Highness, MARTIN LUTHER has 1300 gold coins"

*/