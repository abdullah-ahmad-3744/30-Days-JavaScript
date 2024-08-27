let mainContainer = document.querySelector(".main-container");
let calculator = document.querySelector(".calculator");
let output = document.querySelector(".output");
let buttons = document.querySelectorAll("button");
output.addEventListener("click", () => {
    console.log("Ouput is clicked");
})
buttons.forEach( (button) => {
    button.addEventListener("click", (event) => {
        switch (event.target.innerText) {
            case "%":
                output.innerText = event.target.innerText
                break;
            case "*":
                output.innerText = event.target.innerText
                break;
            case "+":
                output.innerText = event.target.innerText
                break;
            case "-":
                output.innerText = event.target.innerText
                break;
            case ",":
                output.innerText = event.target.innerText
                break;
            case "C":
                output.innerText = "0.0"
                break;
                
        
            default:
                break;
        }
    })    
})