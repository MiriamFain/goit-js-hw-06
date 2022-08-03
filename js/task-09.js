function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyRef = document.querySelector("body");
const magicBtn = document.querySelector(".change-color");
const spanRef = document.querySelector(".color");

magicBtn.addEventListener("click", onChangeColor);

function onChangeColor(event) {
  const randomColor = getRandomHexColor();

  bodyRef.style.backgroundColor = `${randomColor}`;
  spanRef.textContent = bodyRef.style.backgroundColor;
}
