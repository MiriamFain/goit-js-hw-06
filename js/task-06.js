const inputRef = document.querySelector("#validation-input");
const valueLenght = inputRef.getAttribute("data-length");
console.log(valueLenght);

inputRef.addEventListener("blur", onInputBlur);

function onInputBlur(event) {
  if (event.currentTarget.value.length === Number(valueLenght)) {
    inputRef.classList.remove("invalid");
    inputRef.classList.add("valid");
  } else {
    inputRef.classList.remove("valid");
    inputRef.classList.add("invalid");
  }
}
