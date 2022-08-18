const reservations = {
    Bob: { claimed: false },
    Ted: { claimed: true }
}

const checkReservation = function(){
  let name = document.getElementById("TextElement").value;
  let found=false;
  for(let name_i in reservations){
    if (name_i==name){
      found=true;
      if(reservations[name_i]['claimed']==false){
        console.log("Welcome!");
      }
      else{
        console.log("There's a problem");
      }
    }
  }
  if(found==false){
    console.log("sorry the name doesn't exist in the reservations");
  }
}