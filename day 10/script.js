let counterTag = document.querySelector("#counterValue");
let counterValue = localStorage.getItem("counterValue");
const increaseBtn = document.querySelector("#increase");
const decreaseBtn = document.querySelector("#decrease");
const restartBtn = document.querySelector("#restartbtn");

counterTag.innerHTML = counterValue;

increaseBtn.addEventListener("click", () => {
  counterValue++;
  console.log(counterValue);
  counterTag.innerHTML = counterValue;
  localStorage.setItem("counterValue", counterValue);
});

decreaseBtn.addEventListener("click", () => {
  if (counterValue > 0) {
    counterValue--;
  }
  console.log(counterValue);
  counterTag.innerHTML = counterValue;
  localStorage.setItem("counterValue", counterValue);
});

restartBtn.addEventListener("click", () => {
  counterValue = 0;
  counterTag.innerHTML = counterValue;
  localStorage.setItem("counterValue", counterValue);
});
