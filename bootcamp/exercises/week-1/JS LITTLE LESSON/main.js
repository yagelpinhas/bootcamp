const story = "In the beginning there was light. Then there were wolves. Finally there was a big fire. Ultimately, Shelob the wolf-master put out the fire with her feet. But until then, the fire caused one heck of a lot of damage."
const specialChars = [",", ".", "'", '"',"?", "!", ";"]
const wordCounts = {}

const fixString=function(str,delimiters){
    return str.replace(/[^a-zA-Z -]/g,"").toLowerCase() // we want only small letters big letters and - to remain
}

const countUniqueWords=function(str,delimiters){
    let fixedStr=fixString(str,delimiters);
    let res={}
    for(word of fixedStr.split(" ")){
        if(res[word]==undefined){
            res[word]=1
        }
        else{
            res[word]+=1
        }
    }
    return res
}

result=countUniqueWords(story,specialChars)
console.log(result)
