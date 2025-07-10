let current_num = "";
let previous_num = "";
let operator = "";
let display = document.getElementById("display");

function press(num) {
  current_num += num;
  display.value = current_num;
}
function set_operator(opr) {
  if (current_num === "") return;
  if (previous_num !== " ") calculate();
  previous_num = current_num;
  current_num = "";
  operator = opr;
}
function calculate() {
  if (current_num === "" || previous_num === "" || operator === "") return;
  num1 = parseFloat(current_num);
  num2 = parseFloat(previous_num);
  if (operator === "+") display.value = num1 + num2;
  else if (operator === "-") display.value = num1 - num2;
  else if (operator === "/") {
    if (num2 === 0) {
      display.value = "math error";
      clearDisplay();
      return;
    } else display.value = num1 / num2;
  } else if (operator === "%") display.value = num1 % num2;
  else if (operator === "*") display.value = num1 * num2;
  let result = display.value;
  currentNumber = result;
  previousNumber = "";
}
function clearDisplay() {
  current_num = "";

  previous_num = "";
  operator = "";
  display.value = "";
}
