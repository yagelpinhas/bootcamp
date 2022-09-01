
const add = function(a, b){
    return a + b
}


const calculateHyp = function(a,b){
    return Math.sqrt((a*a + b*b))
}


const clearLowPriority = function(arr){
    let newArr=arr.filter(obj => obj.priority=="HIGH")
    return newArr
}


//module.exports = add
//module.exports = calculateHyp
//module.exports = clearLowPriority

class PictureManager {
    constructor() {
        this.pictureURLs = []
    }

    addPicture(picURL) {
        this.pictureURLs.push(picURL)
    }

    removePicture(picURL) {
        this.pictureURLs.splice(this.pictureURLs.indexOf(picURL), 1)
    }
}


class ArrayManipulator {
    manipulate(arr1, arr2) {
        if(arr1.length != arr2.length){
            return { error: "Array lengths don't match" }
        }
        let obj = {}
        for (let i=0;i<arr1.length;i++) {
            let key = arr1[i]
            obj[key] = arr2[i]
        }
        return obj
    }
}

class Exercises{
    
    
    isEven(n) {
        return n % 2 == 0 ? true : false
    }

    
    //should remove at least one element from the array `arr`
    removeAtLeastOne(arr) {
        let numItemsToRemove = Math.floor(Math.random() * (arr.length - 1)) + 1
        arr.splice(0, numItemsToRemove)
        return arr
    }
    //should return a clean string without these symbols: "!", "#", ".", ",", "'"
    simplify(str) {
        let symbols = ["!", "#", ".", ",", "'"]
        return str.split("").filter(c => symbols.indexOf(c) == -1).join("")
    }

    validate(arr){
        if(arr == undefined){
            return {error: "Need at least one boolean"}
        }
        else if(typeof(arr)!= 'object'){
            return {error: "Need at least one boolean"}
        }
        let falseCounter = 0;
        let trueCounter = 0;
        for(let i=0;i<arr.length;i++){
            if (typeof arr[i] == "boolean"){
                if(arr[i]==true){
                    trueCounter=trueCounter+1;
                }
                else{
                    falseCounter=falseCounter+1;
                }
            }
        }
        if(falseCounter==0 && trueCounter == 0){
            return {error: "Need at least one boolean"}
        }
        else if(trueCounter>falseCounter){
            return true
        }
        else{
            return false
        }
        
    }
}


//module.exports = PictureManager
//module.exports = ArrayManipulator
module.exports = Exercises