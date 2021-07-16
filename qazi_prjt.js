// Challenge => Age Generator ======================================

function getAge() {
  var age = prompt("When were you born? ");
  let result = (2021 - age) * 365;
  let textNote = document.createTextNode("You are " + result + " days old");
  let ageShow = document.createElement("h1");
  ageShow.setAttribute("id", "displayAge");
  ageShow.appendChild(textNote);
  document.getElementById("ageDisplay").appendChild(ageShow);
  /* let text = `You are ${result} days old`;
    let ageShow = document.createElement('h3');
    ageShow.textContent = text;
    document.querySelector('#ageDisplay').appendChild(ageShow); */
}

function resetAge() {
  let abc = document.getElementById("displayAge");
  abc.remove();
}

/*
//======================= Alternative way ==================

function getAge() {
    var age = prompt('What year where you born ?');
    let result = (2021 - age) * 365;
    let text = 'You are ';
    let text2 = ' days old my friend';
    let ageIs = document.getElementById('ageDisplay');
    ageIs.innerHTML = text + result + text2;
};

function resetAge() {
    let abc = document.getElementById('ageDisplay');
    let ageIs = document.getElementById('ageDisplay');
    ageIs.innerHTML = '';
}
*/

// Challenge => Image Generator =======================

function generateImage() {
  let image = document.createElement("img");
  image.src = "/Images/080.jpg";
  let imgDisplay = document.getElementById("imageDisplay");
  imgDisplay.appendChild(image);
}

// Challenge => Rock, Paper , Scissors Game ================

function rpsFxn(yourChoice) {
  // console.log(yourChoice);
  var humanChoice, botChoice;
  humanChoice = yourChoice.id;

  let gameArr = ["rock", "paper", "scissors"];
  function randomGen() {
    return Math.floor(Math.random() * 3);
  }

  function stringGen(num) {
    return gameArr[num];
  }

  botChoice = stringGen(randomGen());
  var result1 = decideWinner(humanChoice, botChoice);
  var mssg = finalMsg(result1);
  rpsImgGen(humanChoice, botChoice, mssg);
  /* 
        console.log(botChoice);
        console.log(humanChoice);
        console.log(randomGen());
        console.log(result1);     
        console.log(mssg);     */
}

function decideWinner(human1Choice, bot1Choice) {
  var rpsWinner = {
    rock: { scissors: 1, rock: 0.5, paper: 0 },
    paper: { rock: 1, paper: 0.5, scissors: 0 },
    scissors: { paper: 1, scissors: 0.5, rock: 0 },
  };

  var yourScore = rpsWinner[human1Choice][bot1Choice];
  var botScore = rpsWinner[bot1Choice][human1Choice];
  return [yourScore, botScore];
}

function finalMsg([yourScore, botScore]) {
  if (yourScore === 0) {
    return { message: "You Win", color: "green" };
  } else if (yourScore === 0.5) {
    return { message: "You Draw", color: "blue" };
  } else {
    return { message: "You Lose", color: "red" };
  }
}

function rpsImgGen(humanImgChoice, botImgChoice, finalMsg) {
  var imgDb = {
    rock: document.getElementById("rock").src,
    paper: document.getElementById("paper").src,
    scissors: document.getElementById("scissors").src,
  };

  let humanDiv = document.createElement("div");
  let botDiv = document.createElement("div");
  let mssgDiv = document.createElement("div");

  let humanImg = imgDb[humanImgChoice];
  let botImg = imgDb[botImgChoice];
  let mssgImg = imgDb[finalMsg];

  humanDiv.innerHTML =
    '<img src=" ' +
    humanImg +
    '" style="width: 180px; height: 280px; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),  0 6px 20px 0 rgba(0, 0, 0, 0.19);" >';
  mssgDiv.innerHTML =
    '<h1 style = "font-size: 40px; padding: 60px;  color:  ' +
    finalMsg["color"] +
    ';" > ' +
    finalMsg["message"] +
    "</h1>";
  botDiv.innerHTML =
    '<img src=" ' +
    botImg +
    '" style="width: 180px; height: 280px; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),  0 6px 20px 0 rgba(0, 0, 0, 0.19);" >';

  document.getElementById("image_show").appendChild(humanDiv);
  document.getElementById("image_show").appendChild(mssgDiv);
  document.getElementById("image_show").appendChild(botDiv);

  document.getElementById("rock").remove();
  document.getElementById("paper").remove();
  document.getElementById("scissors").remove();
}

// Challenge => Color Changer =============================

var allButtons = document.getElementsByTagName("button");

var copyAllButtons = [];
for (let i = 0; i < allButtons.length; i++) {
  copyAllButtons.push(allButtons[i].classList[1]);
}

function btnColorChanger(picker) {
  if (picker.value === "red") {
    redColorFxn();
  } else if (picker.value === "yellow") {
    yellowColorFxn();
  } else if (picker.value === "green") {
    greenColorFxn();
  } else if (picker.value === "reset") {
    resetColorFxn();
  } else if (picker.value === "random") {
    randomColorFxn();
  }
}

function redColorFxn() {
  for (let i = 0; i < allButtons.length; i++) {
    allButtons[i].classList.remove(allButtons[i].classList[1]);
    allButtons[i].classList.add("btn_red");
  }
}
function yellowColorFxn() {
  for (let i = 0; i < allButtons.length; i++) {
    allButtons[i].classList.remove(allButtons[i].classList[1]);
    allButtons[i].classList.add("btn_yellow");
  }
}
function greenColorFxn() {
  for (let i = 0; i < allButtons.length; i++) {
    allButtons[i].classList.remove(allButtons[i].classList[1]);
    allButtons[i].classList.add("btn_green");
  }
}

function resetColorFxn() {
  for (let i = 0; i < allButtons.length; i++) {
    allButtons[i].classList.remove(allButtons[i].classList[1]);
    allButtons[i].classList.add(copyAllButtons[i]);
  }
}

function randomColorFxn() {
  var choices = ["btn_red", "btn_yellow", "btn_green", "btn_reset"];
  for (let i = 0; i < allButtons.length; i++) {
    let rndPicker = Math.floor(Math.random() * 4);
    allButtons[i].classList.remove(allButtons[i].classList[1]);
    allButtons[i].classList.add(choices[rndPicker]);
  }
}

// Blackjack Challenge =============================

var blackjackObj = {
  you: { div: ".my_score", scoreline: "#my_score", score: 0 },
  dealer: { div: ".bot_score", scoreline: "#bot_score", score: 0 },
  cards: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"],
  mapCards: { 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, 10: 10 },
  wins: 0,
  losses: 0,
  draws: 0,
  isStand: false,
  turnOver: false,
};

let YOU = blackjackObj["you"];
let DEALER = blackjackObj["dealer"];

let bjHit = document.querySelector("#hit_btn");
let bjDeal = document.querySelector("#deal_btn");
let bjStand = document.querySelector("#stand_btn");

bjHit.addEventListener("click", hitFxn);

bjDeal.addEventListener("click", dealFxn);

bjStand.addEventListener("click", standFxn);

function hitFxn() {
  if (blackjackObj["isStand"] === false) {
    let card = randomCard();
    showCard(card, YOU);
    updateScore(card, YOU);
    showScore(YOU);
  }
}
// The showWinner Fxn Should always come b4 the removeImg fxn bcoz it equates it bck to zero
// The removefxn() houses the resr of the paraneters defining the function
function dealFxn() {
  if (blackjackObj["turnOver"] === true) {
    removeImg();
  }
}
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function standFxn() {
  blackjackObj["isStand"] = true;
  while (DEALER["score"] < 16 && blackjackObj["isStand"] == true) {
    let card = randomCard();
    showCard(card, DEALER);
    updateScore(card, DEALER);
    showScore(DEALER);
    await sleep(1000);
  }

  if (DEALER["score"] > 15) {
    blackjackObj["turnOver"] = true;
    let winner = computeWinner();
    showWinner(winner);
    console.log(blackjackObj["turnOver"]);
  }
}

function randomCard() {
  let rndCard = Math.floor(Math.random() * 10);
  return blackjackObj["cards"][rndCard];
}

function showCard(card, active) {
  if (active["score"] <= 21) {
    let imgFetch = document.createElement("img");
    imgFetch.src = "/images/add.jpg";
    imgFetch.style.padding = "10px";
    document.querySelector(active["div"]).appendChild(imgFetch);
  }
}

function removeImg() {
  blackjackObj["isStand"] = false;
  let yourImg = document.querySelector(".my_score").querySelectorAll("img");
  let botImg = document.querySelector(".bot_score").querySelectorAll("img");
  for (let i = 0; i < yourImg.length; i++) {
    yourImg[i].remove();
  }
  for (let i = 0; i < botImg.length; i++) {
    botImg[i].remove();
  }

  YOU["score"] = 0;
  DEALER["score"] = 0;

  document.querySelector("#bot_score").textContent = 0;
  document.querySelector("#my_score").textContent = 0;

  document.querySelector("#bot_score").style.color = "#fff";
  document.querySelector("#my_score").style.color = "#fff";

  document.querySelector(".game_stats").textContent = "Let's Play";
  document.querySelector(".game_stats").style.color = "black";

  blackjackObj["turnOver"] = false;
}

function updateScore(card, active) {
  active["score"] += blackjackObj["mapCards"][card];
}

function showScore(active) {
  if (active["score"] > 21) {
    document.querySelector(active["scoreline"]).textContent = "BUST!!";
    document.querySelector(active["scoreline"]).style.color = "red";
  } else {
    document.querySelector(active["scoreline"]).textContent = active["score"];
  }
}

function computeWinner() {
  let winner;
  if (YOU["score"] <= 21) {
    if (YOU["score"] > DEALER["score"] || DEALER["score"] > 21) {
      winner = YOU;
      blackjackObj["wins"]++;
    } else if (YOU["score"] < DEALER["score"]) {
      winner = DEALER;
      blackjackObj["losses"]++;
    } else if (YOU["score"] === DEALER["score"]) {
      winner = "";
      blackjackObj["draws"]++;
    }
  } else if (YOU["score"] > 21 && DEALER["score"] <= 21) {
    winner = DEALER;
    blackjackObj["losses"]++;
  } else if (YOU["score"] > 21 && DEALER["score"] > 21) {
    winner = "";
    blackjackObj["draws"]++;
  }
  return winner;
}

function showWinner(winner) {
  let message, msgColor;
  if (blackjackObj["turnOver"] === true) {
    if (winner === YOU) {
      message = "YOU win";
      msgColor = "green";
      document.querySelector("#myWins").textContent = blackjackObj["wins"];
    } else if (winner === DEALER) {
      message = "YOU lost";
      msgColor = "red";
      document.querySelector("#myLosses").textContent = blackjackObj["losses"];
    } else {
      message = "YOU drew";
      msgColor = "Black";
      document.querySelector("#myDraws").textContent = blackjackObj["draws"];
    }

    document.querySelector(".game_stats").textContent = message;
    document.querySelector(".game_stats").style.color = msgColor;
  }
}
