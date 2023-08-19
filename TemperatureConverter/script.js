let celsius = document.getElementById("celsius");
let fahrenheit = document.getElementById("fahrenheit");
console.log(celsius, fahrenheit.value);


let toFahrenheit = () => {
  let res = (parseFloat(celsius.value) * 9) / 5 + 32;
  fahrenheit.value = parseFloat(res.toFixed(2));
  console.log(res);
}


let toCelsius = () => {
  let res = (parseFloat(fahrenheit.value) -32) *5/9;
  celsius.value = parseFloat(res.toFixed(2));
  console.log(res);
}
