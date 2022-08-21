/*Exercise 1
const pushPull=function(callback){
    callback()
}

const helloFunc=function(){
    console.log("Hello");
}

End Exercise 1
*/


/*Exercise 2
const returnTime = function (time) {
    alert('The current time is: ' + time)
  }
  

const getTime=function(callback){
    const time=new Date()
    callback(time)
}
  getTime(returnTime)

  end Exercise 2 
  */

  
  /*Exercise 3
  const displayData = function (alertDataFunc, logDataFunc, data) {
    alertDataFunc(data);
    logDataFunc(data);
  };
  

  const logData=function(data){
    console.log(data);
  }
  displayData(alert, logData, "I like to party")

  end exercise 3 
  */
 
  /* Exercise 4
  const add = (x, y) => x+y

  x=add(2,3)
  console.log(x)

  end exercise 4 
  */
 

  /* Exercise 5
  const capitalize = (str) => str[0].toUpperCase()+str.substring(1).toLowerCase()

  result=capitalize("bY")
  console.log(result)

  end exercise 5 
  */

  /*exercise 6
 
  const determineWeather = temp => {
    if(temp > 25){
      return "hot"
    }
    return "cold"
  }

  const commentOnWeather = (temp) => "It's " + determineWeather(temp)

  result=commentOnWeather(40)
  console.log(result)

  end exercise 6
  */

  /* Exercise 7
  */
  const explode = (lightFunc, soundFunc, sound) => {
    lightFunc()
    soundFunc(sound)
  }
      
  const shineLight = () => document.getElementById("box").style.backgroundColor = "yellow"
      
  const makeSound = sound => alert(sound)
      
  explode(shineLight, makeSound, "BOOM")