let newCount = document.getElementById("savel-el");
let countEl = document.getElementById("count-el");
let count = 0;

function increament() {
  count += 1;
  countEl.textContent = count;
}

function save() {
  let saveItems = count + " - ";
  newCount.textContent += saveItems;
  countEl.textContent = 0;
  count = 0;
}
