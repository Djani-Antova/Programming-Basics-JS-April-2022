function celsiusToFahrenheir (input) {
    let celsius = input[0];
    let fahrenheit = celsius * 1.8 + 32;

    fahrenheit=fahrenheit.toFixed(2);

    console.log(fahrenheit);

}
celsiusToFahrenheir([-
    5.5]);