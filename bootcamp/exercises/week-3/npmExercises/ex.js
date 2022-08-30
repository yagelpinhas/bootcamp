
const faker = require('faker')
const validator = require('validator')

console.log(validator.isEmail('shoobert@dylan'));

console.log(validator.isMobilePhone('786-329-9958','en-US'))

let blacklist = ["!", "?", ".", "@", "~", ",", "'"]
let text = "I'M SO EXCITED!!!~!"
console.log(validator.blacklist(text, blacklist))

const makeHuman = function(num){
    let people=[]
    for(let i=0;i<num;i++){
        people.push({name: 	faker.name.firstName(), image: faker.image.avatar() ,companyName:faker.company.companyName() })
    }
    console.log(people)
}
makeHuman(2)
