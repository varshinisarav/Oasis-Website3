const celsiusField = document.querySelector("#celsius");
const degree = document.querySelector("#degree");
const convertbtn = document.querySelector("#convertbtn");
const tempType = document.querySelector("#temp-type");
window.addEventListener("load", () => {
  degree.value = "";
  celsiusField.innerHTML = "";
});

convertbtn.addEventListener("click", (e) => {
  e.preventDefault();
  convertToCelsius();
});
function convertToCelsius() {
  let inputValue = degree.value;
  if (tempType.value == "fahrenhiet") {
    const FahrenhietToCelsius = (inputValue - 32) * (5 / 9);
    celsiusField.innerHTML = `${FahrenhietToCelsius.toFixed(3)} &deg;
    c`;
  } else if (tempType.value == "kelvin") {
    const KelvinToCelsius = inputValue - 273.15;
    celsiusField.innerHTML = `${KelvinToCelsius.toFixed(3)} &deg;
    c`;
  }
}
