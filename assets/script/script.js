let display = document.querySelector(".display");
let button = Array.from(document.querySelectorAll(".button"));
let clearButton = Array.from(document.querySelector(".material-icons"));

button.map((button) => {
  button.addEventListener("click", (e) => {
    switch (e.target.innerText) {
      case "C":
        display.innerText = "0";
        break;
      case "=":
        try {
          display.innerText = eval(display.innerText);
          break;
        } catch {
          display.innerText = "Error";
        }
      case "%":
        let passed = display.innerText + "/100";
        display.innerText = eval(passed);
        break;
      case "+/-":
        display.innerText = "-";
        break;
      case "backspace":
        display.innerText = display.innerText.slice(0, -1) || "0";
        break;
      default:
        if (display.innerText === "0" && e.target.innerText !== ".") {
          display.innerText = e.target.innerText;
        } else {
          display.innerText += e.target.innerText;
        }
    }
  });
});
