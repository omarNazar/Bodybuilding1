let bodyWeight = document.getElementById("weight");
let bodyHeight = document.getElementById("height");
let bodyMass = document.getElementById("res")

let myButton = document.getElementById("click");

// function to calculate body mass index
myButton.onclick = function CalculateBodyMass() {
        let w = parseFloat(bodyWeight.value);
        let h = (parseFloat(bodyHeight.value)) / 100;
        let result = (w / (h * h)).toFixed(1);
        let text1;
        if (result < 18.5) {
            text1 = " نقص في الوزن  ";

        } else if (result >= 18.5 && result <= 24.9) {
            text1 = " وزن طبيعي  "

        } else if (result >= 25.0 && result <= 29.9) {
            text1 = " زيادة في الوزن  "

        } else if (result >= 30.0 && result <= 34.9) {
            text1 = " بدانة  "

        } else if (result >= 35.0) {
            text1 = " بدانة مفرطة  "

        }
        bodyMass.innerHTML = `<h1>${result}${text1}</h1>
    `;
    }
    // Function to empty fields  
let clearButton = document.getElementById("clear")
clearButton.onclick = function clearr() {
    bodyMass.innerHTML = " ";
}