let form = document.querySelector("form");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    let height  =  parseInt(document.querySelector("#height").value);
    let weight  =  parseInt(document.querySelector("#weight").value);
    let result  = document.querySelector("#result");

    if (height === "" || height <= 0 || isNaN(height)) {
        result.innerHTML = `Please give a valid height ${height}`
    } else if (weight === "" || weight <= 0 || isNaN(weight)){
        result.innerHTML = `Please give a valid weight ${weight}`
    } else {
        const bmi = (weight / (( height * height ) / 10000)).toFixed(2);
        result.innerHTML = `<span> ${bmi}</span>`
    }
})