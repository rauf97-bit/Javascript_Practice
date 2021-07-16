// Event listeners on Buttons and Forms

let msg = document.querySelector(".msg");
let nameInput = document.querySelector("#name");
let emailInput = document.querySelector("#email");
let btn_flex = document.querySelector(".btn1");
let ul_display = document.querySelector(".ul_display");
let myForm = document.querySelector(".form-group");

btn_flex.addEventListener("click", function (e) {
  console.log(nameInput.value);
});

myForm.addEventListener("submit", submitDemo);
function submitDemo(e) {
  e.preventDefault();
  if (nameInput.value === "" || emailInput.value === "") {
    msg.classList.add("error");
    msg.innerHTML = "Please fill out the required fields";

    setTimeout(() => msg.remove(), 3500);
  } else {
    const list = document.createElement("li");
    list.appendChild(
      document.createTextNode(
        ` Hello ${nameInput.value} of ${emailInput.value} You are Welcome`
      )
    );
    ul_display.appendChild(list);
    nameInput.value = "";
    emailInput.value = "";
  }
}
let theme = document.querySelector("#btn_");
theme.addEventListener("click", changeTheme);
function changeTheme() {
  document.querySelector("body").classList.add("btn");
}
