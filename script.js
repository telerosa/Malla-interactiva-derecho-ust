const grid = document.getElementById("grid");
const resetBtn = document.getElementById("reset");

function randomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

for (let i = 1; i <= 100; i++) {
  const cell = document.createElement("div");
  cell.classList.add("cell");
  cell.textContent = i;

  cell.addEventListener("click", () => {
    cell.style.backgroundColor = randomColor();
  });

  grid.appendChild(cell);
}

resetBtn.addEventListener("click", () => {
  const cells = document.querySelectorAll(".cell");
  cells.forEach(c => {
    c.style.backgroundColor = "lightgray";
  });
});
