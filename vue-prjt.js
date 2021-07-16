// Simple Text Toggle

let toggle = document.querySelector(".toggle");
toggle.addEventListener("click", changeText);
function changeText() {
  if (toggle.innerHTML == "JAVASCRIPT") {
    toggle.innerHTML = "WELCOME DEVELOPER";
  } else {
    toggle.innerHTML = "JAVASCRIPT";
  }
}

// Fullscreen Image Viewer

let imagePicker = document.getElementById("enlarge");
function displayFull() {
  if (imagePicker.requestFullscreen) {
    imagePicker.requestFullscreen();
  }
}

function darkMode() {
  document.body.style.background = "black";
  document.body.style.color = "gray";
}

// Text Changer

let textFlex = document.getElementById("text-flex");

function displayRed() {
  textFlex.classList.remove(textFlex.classList[0]);
  textFlex.classList.add("red");
}
function displayBlue() {
  textFlex.classList.remove(textFlex.classList[0]);
  textFlex.classList.add("blue");
}
function displayYellow() {
  textFlex.classList.remove(textFlex.classList[0]);
  textFlex.classList.add("yellow");
}
function displayWhite() {
  textFlex.classList.remove(textFlex.classList[0]);
  textFlex.classList.add("white");
}

let slider = document.getElementById("rangeNum");
let range = document.getElementById("result");
slider.oninput = () => {
  range.innerHTML = slider.value;
};

let replaceBtn = () => {
  location.replace("/Images/080.jpg");
};
