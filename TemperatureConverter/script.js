 const calculate = () => {
  let input = document.getElementById("input");
  console.log(input.value);
  let tempselect = document.getElementById("select");
  let tempselected = select.options[tempselect.selectedIndex].value;
  console.log(tempselected);
  let toFahrenheit = (cel) => {
    let res = (parseFloat(input.value) * 9) / 5 + 32;
    return res;
  };
  let toCelsius = (fah) => {
    let res = parseFloat((((parseFloat(input.value) - 32) * 5) / 9).toFixed(2));
    return res;
  };
  if (tempselected == "cel") {
    document.getElementById("result").innerHTML =
      toFahrenheit(input) + "&#176;Fahrenheit";
    console.log(
      (document.getElementById("result").innerHTML =
        toFahrenheit(input) + "&#176;Fahrenheit")
    );
  } else {
    document.getElementById("result").innerHTML =
      toCelsius(input) + "&#176;Celsius";
    console.log(
      (document.getElementById("result").innerHTML =
        toCelsius(input) + "&#176;Celsius")
    );
  }
};
