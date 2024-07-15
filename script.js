const gridSizeButton = document.querySelector("#set-gridsize-button");
const defaultGridSize = 16;

// Set n x m size of grid
let gridRowSize = defaultGridSize;
let gridColSize = defaultGridSize;
let isMouseDown = false;

function setCustomGridSize() {
  // Prompt user to set the square grid size
  let userGridSize = prompt(
    "Set the grid size by entering a value from 16 to 100",
    defaultGridSize
  );

  // Validate user input
  if (userGridSize < 16 || userGridSize > 100 || isNaN(userGridSize)) {
    alert("Please enter a valid number between 16 and 100.");
    return;
  }

  gridRowSize = userGridSize;
  gridColSize = userGridSize;

  // Grab grid container div for appending children
  const gridContainer = document.querySelector(".div-grid-container");

  // If a grid cell already exists, delete and generate new grid with the set size
  gridContainer.innerHTML = "";

  // Generate col divs for grid
  for (let i = 0; i < gridColSize; i++) {
    const gridCol = document.createElement("div");
    gridCol.classList.add("div-col");
    gridContainer.appendChild(gridCol);

    // Generate row divs for grid
    for (let j = 0; j < gridRowSize; j++) {
      const gridRow = document.createElement("div");
      gridRow.classList.add("div-cell");
      gridRow.style.border = ".1mm solid black";
      gridCol.appendChild(gridRow);

      // Event listeners to change cell color when mouse click & held down
      gridRow.addEventListener("mousedown", () => {
        gridRow.style.backgroundColor = "blue";
        isMouseDown = true;
      });

      gridRow.addEventListener("mouseover", () => {
        if (isMouseDown) {
          gridRow.style.backgroundColor = "blue";
        }
      });

      gridRow.addEventListener("mouseup", () => {
        isMouseDown = false;
      });
    }
  }
}

gridSizeButton.addEventListener("click", setCustomGridSize);
