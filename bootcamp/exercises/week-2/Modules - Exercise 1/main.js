const StringFormatter = function () {

    const capitalizeFirst = function(str){
        return str[0].toUpperCase()+str.substring(1).toLowerCase();
    }

    const skewerCase = function(str){
        return str.replace(" ","-")
    }
   
    return {
        capitalizeFirst: capitalizeFirst,
        skewerCase: skewerCase
    }
}

form = StringFormatter().capitalizeFirst
result = form("hEy")
console.log(result)
form2=StringFormatter().skewerCase
result2=form2("Hello There")
console.log(result2)