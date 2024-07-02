let player = "x";
let gameRunning = true;

const boxesArray = [...document.querySelectorAll(".box")];
const playAgainBtn = document.querySelector(".playAgain");

boxesArray.forEach((box) => {
  box.addEventListener("click", handleEvent);
});

function handleEvent(event) {
  if (gameRunning === true) {
    const clickedBox = event.target;
    if (clickedBox.textContent === "") {
      clickedBox.textContent = player;
      color = player === "x" ? "rgb(33, 33, 33)" : "rgb(230, 230, 230)";
      clickedBox.style.color = color;
      if (win(player) || boxesArray.every((box) => box.textContent !== "")) {
        playAgain();
      }
      player = player === "x" ? "o" : "x";
    }
  }
}

function playAgain() {
  gameRunning = false;
  boxesArray.forEach((box) => {
    box.style.cursor = "default";
  });
  playAgainBtn.style.visibility = "visible";
  playAgainBtn.addEventListener("click", () => {
    playAgainBtn.style.visibility = "hidden";
    gameRunning = true;
    boxesArray.forEach((box) => {
      box.textContent = "";
      box.style.cursor = "pointer";
      box.style.color = "";
    });
  });
}

function win(player) {
  const Wcolor = "#cf4c4c";
  if (
    boxesArray[0].textContent === player &&
    boxesArray[1].textContent === player &&
    boxesArray[2].textContent === player
  ) {
    [0, 1, 2].forEach((i) => {
      boxesArray[i].style.color = Wcolor;
    });
    return true;
  } else if (
    boxesArray[3].textContent === player &&
    boxesArray[4].textContent === player &&
    boxesArray[5].textContent === player
  ) {
    [3, 4, 5].forEach((i) => {
      boxesArray[i].style.color = Wcolor;
    });
    return true;
  } else if (
    boxesArray[6].textContent === player &&
    boxesArray[7].textContent === player &&
    boxesArray[8].textContent === player
  ) {
    [6, 7, 8].forEach((i) => {
      boxesArray[i].style.color = Wcolor;
    });
    return true;
  } else if (
    boxesArray[0].textContent === player &&
    boxesArray[3].textContent === player &&
    boxesArray[6].textContent === player
  ) {
    [0, 3, 6].forEach((i) => {
      boxesArray[i].style.color = Wcolor;
    });
    return true;
  } else if (
    boxesArray[1].textContent === player &&
    boxesArray[4].textContent === player &&
    boxesArray[7].textContent === player
  ) {
    [1, 4, 7].forEach((i) => {
      boxesArray[i].style.color = Wcolor;
    });
    return true;
  } else if (
    boxesArray[2].textContent === player &&
    boxesArray[5].textContent === player &&
    boxesArray[8].textContent === player
  ) {
    [2, 5, 8].forEach((i) => {
      boxesArray[i].style.color = Wcolor;
    });
    return true;
  } else if (
    boxesArray[0].textContent === player &&
    boxesArray[4].textContent === player &&
    boxesArray[8].textContent === player
  ) {
    [0, 4, 8].forEach((i) => {
      boxesArray[i].style.color = Wcolor;
    });
    return true;
  } else if (
    boxesArray[2].textContent === player &&
    boxesArray[4].textContent === player &&
    boxesArray[6].textContent === player
  ) {
    [2, 4, 6].forEach((i) => {
      boxesArray[i].style.color = Wcolor;
    });
    return true;
  }
}
