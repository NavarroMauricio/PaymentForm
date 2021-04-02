const cvcInput = document.querySelector(".mediumInputSize");
const cvcButton = document.querySelector(".cvcContainer");

cvcInput.addEventListener("focus",addBorderColor);
cvcInput.addEventListener("blur",removeBorderColor);

function addBorderColor(){
    cvcButton.classList.add("cvcContainerBorder");
}

function removeBorderColor(){
    cvcButton.classList.remove("cvcContainerBorder");
}