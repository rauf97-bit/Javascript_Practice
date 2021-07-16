// Notification Project

let btn1 = document.getElementById("btn1");
let cont1 = document.querySelector(".container1");
btn1.addEventListener("click", () => {
  let notif = document.createElement("div");
  notif.classList.add("notification");
  notif.innerHTML = "<h3>You just Clicked me</h3>";
  cont1.appendChild(notif);
  setTimeout(() => {
    notif.remove();
  }, 2000);
});

// Text Slice Project
let textCont = document.querySelector(".text-play");
let textIndex = 0;
const textPlay = "Hello to Everyone watching here and at home. ";
(function writeText() {
  for (let i = 0; i < textPlay.length; i++) {
    textCont.textContent = textPlay.slice(0, textIndex);
    textIndex++;
    // console.log(textCont.textContent);
    if (textIndex > textPlay.length) {
      textIndex = 0;
    }
  }
  //   setInterval(writeText, 200);
})();

// Pop up Notification

let popBtn = document.getElementById("btn2");
let closeBtn = document.getElementById("btn3");
let popDiv = document.querySelector(".pop-up");
popBtn.addEventListener("click", () => {
  popDiv.classList.add("active");
  console.log(popDiv);
});
closeBtn.addEventListener("click", () => {
  popDiv.classList.remove("active");
});

// Heart Rain-Drops

function createHearts() {
  let heart = document.createElement("p");
  heart.innerHTML = "&hearts;";
  heart.style.position = "relative";
  heart.style.left = `${Math.random() * 98}vw`;
  let article = document.querySelector(".love");
  article.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
}

setInterval(createHearts, 200);
