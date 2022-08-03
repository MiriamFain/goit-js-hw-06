const counter = {
  value: 0,

  decrement() {
    this.value -= 1;
  },

  increment() {
    this.value += 1;
  },
};

const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const valueEl = document.querySelector("#value");

decrementBtn.addEventListener("click", function () {
  counter.decrement();
  valueEl.textContent = counter.value;
});

incrementBtn.addEventListener("click", function () {
  counter.increment();
  valueEl.textContent = counter.value;
});

// const updateCounter = function (value, operation) {
//   operation(value);
// };

// updateCounter(1, counter.decrement.bind(counter));
// updateCounter(1, counter.increment.bind(counter));

// console.log(counter);
