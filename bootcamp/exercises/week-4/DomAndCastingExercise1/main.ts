function doX(){
    const someElement = document.querySelector(".foo") as HTMLInputElement;
    console.log("The value is: ", someElement.value);
}