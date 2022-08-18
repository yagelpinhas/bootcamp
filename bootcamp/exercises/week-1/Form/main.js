let form= document.getElementById("form");
let body= document.body;
const check=function(){
    let name = document.getElementById("TextElementName").value;
    let salary=document.getElementById("TextElementSalary").value;
    let birthday= document.getElementById("TextElementBirthday").value;
    let phone= document.getElementById("TextElementPhone").value;
    let valid=true;
    if(name.length<=2){
        const header = document.createElement("p")
        header.innerHTML = "Name Invalid"
        header.style.color="#ff0000";
        form.appendChild(header)
        valid=false;
    }
    if(salary<10000 | salary>16000){
        const header = document.createElement("p")
        header.innerHTML = "Salary Invalid"
        header.style.color="#ff0000";
        form.appendChild(header)
        valid=false;
    }
    if(birthday==false){
        const header = document.createElement("p")
        header.innerHTML = "Birthday Invalid"
        header.style.color="#ff0000";
        form.appendChild(header)
        valid=false;
    }
    if(phone.length!=10){
        const header = document.createElement("p")
        header.innerHTML = "Phone Invalid"
        header.style.color="#ff0000";
        form.appendChild(header)
        valid=false;
    }
    if(valid==true){
        form.style.display="none"
        const header = document.createElement("p")
        header.innerHTML = "Welcome"
        body.appendChild(header)
    }
}