const inputRef = document.querySelector("#font-size-control");
const textRef = document.querySelector("#text");

inputRef.addEventListener("input", onInputChange);

function onInputChange(event) {
  const value = event.currentTarget.value;
  textRef.style.fontSize = `${value}px`;
}
