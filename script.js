const board = document.getElementById("gameBoard");
const resultText = document.getElementById("result");
const sticker = document.getElementById("sticker");
const resetBtn = document.getElementById("resetBtn");

let currentPlayer = "X";
let cells = ["", "", "", "", "", "", "", "", ""];
let isGameOver = false;

const winPatterns = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6]
];

function createBoard() {
  board.innerHTML = "";
  cells.forEach((cell, index) => {
    const cellDiv = document.createElement("div");
    cellDiv.classList.add("cell");
    cellDiv.innerText = cell;
    cellDiv.addEventListener("click", () => makeMove(index));
    board.appendChild(cellDiv);
  });
}

function makeMove(index) {
  if (cells[index] === "" && !isGameOver) {
    cells[index] = currentPlayer;
    createBoard();
    checkResult();
    currentPlayer = currentPlayer === "X" ? "O" : "X";
  }
}

function checkResult() {
  for (let pattern of winPatterns) {
    const [a, b, c] = pattern;
    if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
      isGameOver = true;
      showResult(`${cells[a]} wins! 🏆🥳`, cells[a]);
      return;
    }
  }

  if (!cells.includes("")) {
    isGameOver = true;
    showResult("It's a Draw! 🤝", "draw");
  }
}

function showResult(msg, type) {
  resultText.innerText = msg;
  if (type === "X") {
    sticker.innerHTML = "";
  } else if (type === "O") {
    sticker.innerHTML = "";
  } else {
    sticker.innerHTML = "";
  }
}

resetBtn.addEventListener("click", () => {
  cells = ["", "", "", "", "", "", "", "", ""];
  currentPlayer = "X";
  isGameOver = false;
  resultText.innerText = "";
  sticker.innerHTML = "";
  createBoard();
});

// Start the game
createBoard();