var count = 0;
var countEl = document.querySelector("#count-el");
var saveEl = document.querySelector("#save-all");
var incbtn = document.querySelector("#increment-btn");
var savebtn = document.querySelector("#save-btn");

function increment() {
  count += 1;
  countEl.textContent = count;
  console.log(count);
}
incbtn.addEventListener("click", increment);

function save() {
  let num = count + " - ";
  saveEl.textContent += num;
  countEl.textContent = 0;
  count = 0;
}
savebtn.addEventListener("click", save);
