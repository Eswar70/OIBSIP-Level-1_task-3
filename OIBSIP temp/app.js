let Celsius = document.getElementById('Celsius');
let Fahrenheit = document.getElementById('Fahrenheit');
let Kelvin = document.getElementById('Kelvin');
let Convert = document.getElementById('Convert');
let Clear = document.getElementById('Clear');


Convert.onclick = function() {
    let inputTemp = document.getElementById('inputTemp').value;
    let inputUnit = document.getElementById('inputUnit').value;
    if (inputUnit === 'celsius') {
        Fahrenheit.textContent = ((inputTemp * 9 / 5) + 32).toFixed(2) + ' F';
        Kelvin.textContent = (parseFloat(inputTemp) + 273.15).toFixed(2) + ' K';
        Celsius.textContent = inputTemp + ' C';
    } else if (inputUnit === 'fahrenheit') {
        Celsius.textContent = ((inputTemp - 32) * 5 / 9).toFixed(2) + 'C';
        Kelvin.textContent = ((inputTemp - 32) * 5 / 9 + 273.15).toFixed(2) + ' K';
        Fahrenheit.textContent = inputTemp + ' F';
    } else if (inputUnit === 'kelvin') {
        Celsius.textContent = (parseFloat(inputTemp) - 273.15).toFixed(2) + ' C';
        Fahrenheit.textContent = ((inputTemp - 273.15) * 9 / 5 + 32).toFixed(2) + ' F';
        Kelvin.textContent = inputTemp + ' K';
    }
};


Clear.onclick = function(){
    let inputTemp = document.getElementById('inputTemp');
    inputTemp.value = '';
    Celsius.textContent = '';
    Fahrenheit.textContent = '';
    Kelvin.textContent = '';
};

