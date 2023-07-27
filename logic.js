document.getElementById('convert').onclick = tempConvertion;
document.getElementById('clear').onclick = tempClear;

function tempConvertion() {

    var Fahrenheit = document.getElementById("Fahrenheit").value;
    var Celsius = document.getElementById("Celsius").value;
    var Kelvin = document.getElementById("Kelvin").value;

    if (Fahrenheit != '') {
        let fTemp = parseFloat(Fahrenheit);
        Celsius = (fTemp - 32) * (5 / 9);
        Kelvin = (fTemp - 32) * (5 / 9) + 273.15;
    }
    else if (Celsius != '') {
        let cTemp = parseFloat(Celsius);
        Fahrenheit = (cTemp * (9 / 5)) + 32;
        Kelvin = cTemp + 273.15;
    }
    else {
        let kTemp = parseFloat(Kelvin);
        Celsius = kTemp - 273.15;
        Fahrenheit = (kTemp - 273.15) * (9 / 5) + 32;
    }

    document.getElementById("Fahrenheit").value = parseFloat(Fahrenheit).toFixed(2);
    document.getElementById("Celsius").value = parseFloat(Celsius).toFixed(2);
    document.getElementById("Kelvin").value = parseFloat(Kelvin).toFixed(2);
}

function tempClear() {
    
    document.getElementById('Celsius').value = '';
    document.getElementById('Fahrenheit').value = '';
    document.getElementById('Kelvin').value = '';

}


