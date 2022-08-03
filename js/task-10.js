function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const inputRef = document.querySelector("input");
const boxesRef = document.querySelector("#boxes");

let amount = 0;

createBtn.addEventListener("click", () => {
  amount = inputRef.value;
  createBoxes(amount);
});
destroyBtn.addEventListener("click", () => destroyBoxes(amount));

function createBoxes(amount) {
  let size = 30;
  for (let i = 0; i < amount; i += 1, size += 10) {
    const newBox = document.createElement("div");
    newBox.style.height = `${size}px`;
    newBox.style.width = `${size}px`;
    newBox.style.backgroundColor = getRandomHexColor();
    boxesRef.append(newBox);
  }
}

function destroyBoxes() {
  boxesRef.textContent = "";
}
