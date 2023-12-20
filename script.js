// const DEFAULT_MODE =
const DEFAULT_SIZE = 16;

function setUpGrid(size) {
  const container = document.querySelector(".container");
  for (let i = 0; i < size * size; ++i) {
    const newGrid = document.createElement("div");
    newGrid.classList.add("square");
    newGrid.style.width = `calc((100% - (2px * ${size})) / ${size})`; /* 1/16th of the container width */
    newGrid.style.height = "auto";
    newGrid.addEventListener("mouseover", (e) => drawGrid(e.target));
    container.appendChild(newGrid);
  }
}

function activateButton() {
  const clear = document.querySelector("#clear");
  clear.addEventListener("click", () => clearGrid());

  const newGrid = document.querySelector("#newGrid");
  newGrid.addEventListener("click", () => createNewGrid());
}

function createNewGrid() {
  const input = window.prompt(
    "Please enter the desired grid size (1-64).\nThe default 16 generates a 16*16 grid."
  );
  let newGridSize = parseInt(input);
  if (!isNaN(newGridSize) && newGridSize >= 1 && newGridSize <= 64) {
    console.log("Valid input. Grid size: ", newGridSize);
  } else {
    console.log("Invalid input. Using default size: 16");
    newGridSize = 16;
  }

  const container = document.querySelector(".container");
  container.innerHTML = "";
  //   const squares = document.querySelectorAll(".square");
  //   squares.forEach((square) => container.remove(square));
  setUpGrid(newGridSize);
}

function drawGrid(grid) {
  grid.style.backgroundColor = "cadetblue";
}
function clearGrid() {
  const grids = document.querySelectorAll(".square");
  grids.forEach((grid) => (grid.style.backgroundColor = ""));
}

window.onload = () => {
  setUpGrid(DEFAULT_SIZE);
  activateButton();
};
