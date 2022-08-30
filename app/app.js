let celsius = document.getElementById("celsius_val");
let fahrenheit = document.getElementById("fahrenheit_val");

function Far_converter(){
    let output = (parseFloat(celsius.value) * 9 / 5 ) + 32;
    fahrenheit.value = parseFloat(output.toFixed(2));
}

function Cel_converter(){
    let output = (parseFloat(fahrenheit.value) - 32 ) * 5 / 9;
    celsius.value = parseFloat(output.toFixed(2));
}