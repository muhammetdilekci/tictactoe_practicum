// X => <i class="fa-solid fa-x"></i>
// O => <i class="fa-solid fa-o"></i>

// Selecting All "Starting Page" Tags

let welcomePage = document.querySelector("#welcomePage");
let choose = document.querySelectorAll(".choose");

// Selecting All "Main Page" Tags
let mainPage = document.querySelector("#mainPage");
let showChange = document.querySelector("#showChange");
let boxes = document.querySelectorAll(".boxes");

// Selecting All "Winner Page" Tags
let winner = document.querySelector("#winner");
let winnerName = document.querySelector("#winnerName");
let quit = document.querySelector("#quit");

// How Can We Change Turns
// False => X's Turn
// True => O's Turn

let changeTurn = null;

// Select Which You Want To Be
// X or 0

choose.forEach((chooseNow) => {
  chooseNow.addEventListener("click", () => {
    if (chooseNow.id === "playerX") {
      changeTurn = false;
      //   console.log(changeTurn);
      showChange.style.left = `0px`;
    } else {
      changeTurn = true;
      //   console.log(changeTurn);
      showChange.style.left = `160px`;
    }
    welcomePage.style.display = "none";
    mainPage.style.display = "block";
  });
});

boxes.forEach((items) => {
  items.addEventListener("click", () => {
    // Add "X" Icon If "ChangeTurn" = False
    // Add "O" Icon If "ChangeTurn" = True
    if (changeTurn == false) {
      items.innerHTML = `<i class="fa-solid fa-x"></i>`;
      items.id = "X";
      items.style.pointerEvents = "none";
      showChange.style.left = `160px`;

      // change The "changeTurn" Value False Into True
      changeTurn = true;
    } else {
      items.innerHTML = `<i class="fa-solid fa-o"></i>`;
      items.id = "O";
      items.style.pointerEvents = "none";
      showChange.style.left = `0px`;

      // change The "changeTurn" Value False Into True
      changeTurn = false;
    }
    winningFunction();
    drawFunction();
  });
});

// All Possible Winning Combinations
let winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

let winningFunction = () => {
  for (let a = 0; a <= 7; a++) {
    let b = winningCombinations[a];
    /* console.log(b); */

    if (boxes[b[0]].id == "" || boxes[b[1]].id == "" || boxes[b[2]].id == "") {
      continue;
    } else if (
      boxes[b[0]].id == "X" &&
      boxes[b[1]].id == "X" &&
      boxes[b[2]].id == "X"
    ) {
      /* console.log("X is The Winner"); */

      // Adding Winner Text
      winnerName.innerText = `Player X Win The Game!`;

      // Show "Winner Page" & Hide "Main Page"
      mainPage.style.display = "none";
      winner.style.display = "block";
    } else if (
      boxes[b[0]].id == "O" &&
      boxes[b[1]].id == "O" &&
      boxes[b[2]].id == "O"
    ) {
      /* console.log("O is The Winner"); */

      // Adding Winner Text
      winnerName.innerText = `Player O Win The Game!`;

      // Show "Winner Page" & Hide "Main Page"
      mainPage.style.display = "none";
      winner.style.display = "block";
    } else {
      continue;
    }
  }
};

// Draw Condition
let drawFunction = () => {
  if (
    boxes[0].id != "" &&
    boxes[1].id != "" &&
    boxes[2].id != "" &&
    boxes[3].id != "" &&
    boxes[4].id != "" &&
    boxes[5].id != "" &&
    boxes[6].id != "" &&
    boxes[7].id != "" &&
    boxes[8].id != ""
  ) {
    // Adding Draw Text
    winnerName.innerText = `Draw!`;

    // Show "Winner Page" & Hide "Main Page"
    mainPage.style.display = "none";
    winner.style.display = "block";
  }
};

// Reset Game
quit.addEventListener("click", () => {
  window.location.reload();
});
