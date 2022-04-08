const btnDecrease = document.getElementById("btn-dec");
const btnReset = document.getElementById("btn-reset");
const btnIncrease = document.getElementById("btn-inc");
const counter = document.getElementById("counter");

const btns = document.querySelectorAll(".btn");

// MY OWN WAY WITHOUT LOOKING

/* set initial count
let count = 0;

btnReset.addEventListener("click", function () {
  count = 0;
  counter.innerHTML = count;
});

btnIncrease.addEventListener("click", function () {
  count++;
  counter.innerHTML = count;
});

btnDecrease.addEventListener("click", function () {
  count--;
  counter.innerHTML = count;
}); */

// INSTRUCTOR'S WAY

let count = 0;

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("increase")) {
      count++;
    } else {
      count = 0;
    }
    if (count > 0) {
      counter.style.color = "green";
    } else if (count > 0) {
      counter.style.color = "red";
    } else if (count < 0) {
      counter.style.color = "blue";
    }
    counter.textContent = count;
  });
});
