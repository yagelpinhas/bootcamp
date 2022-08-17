const coffeeShop = {
  beans: 40,
  money: 0,

  drinkRequirements: {
    latte: {beanRequirement: 10, price: 10},
    americano: {beanRequirement: 12, price: 12},
    doubleShot: {beanRequirement: 10, price: 10},
    frenchPress: {beanRequirement: 5, price: 5}
  },

  makeDrink: function (drinkType) {
    // TODO: Finish this method
    let a=false
    for(key in this.drinkRequirements){
      if (drinkType==key){
        a=true
        if(this.beans<this.drinkRequirements[drinkType]){
          console.log("not enough beans")
        }
        else{
          this.beans=-this.drinkRequirements[drinkType]
        }
    
    }
    
  }
  if (a==false){
    console.log("Sorry, we don't make "+ drinkType);
  }
},
buyBeans: function(numBeans){
  //say bean costs 1 dollar
  this.money-=numBeans
},
buyDrink: function(drinkType){
  this.money+=this.drinkRequirements[drinkType][price]
  this.makeDrink(drinkType)
}
}

coffeeShop.makeDrink("latte"); 
coffeeShop.makeDrink("americano");
coffeeShop.makeDrink("filtered"); //should alert/console "Sorry, we don't make filtered"
coffeeShop.makeDrink("doubleShot");
coffeeShop.makeDrink("frenchPress"); //should alert/console "Sorry, we're all out of beans"