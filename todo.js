// Selectors
let todoInput = document.querySelector(".todoInput");
let todoBtn = document.querySelector(".todo-btn");
let todoItems = document.querySelector(".todo-items");
let taskPicker = document.querySelector(".picker");

// EventListeners
todoBtn.addEventListener("click", getList);
todoItems.addEventListener("click", deleteCheck);
taskPicker.addEventListener("click", showTask);
// Functions
function getList(event) {
  event.preventDefault();

  let todoDiv = document.createElement("div");
  todoDiv.classList.add("todo-div");
  let todoList = document.createElement("li");
  todoList.classList.add("todo-list");
  todoList.innerText = todoInput.value;
  todoDiv.appendChild(todoList);

  let deleteBtn = document.createElement("button");
  deleteBtn.classList.add("delete-btn");
  deleteBtn.innerHTML = '<i class="fa fa-envelope"></i>';
  todoDiv.appendChild(deleteBtn);

  let checkBtn = document.createElement("button");
  checkBtn.classList.add("check-btn");
  checkBtn.innerHTML = '<i class="fa fa-user icon"></i>';
  todoDiv.appendChild(checkBtn);

  todoItems.appendChild(todoDiv);
  todoInput.value = "";
}

function deleteCheck(e) {
  const item = e.target;
  // Delete Fxn
  if (item.classList[0] === "delete-btn") {
    const bin = item.parentElement;
    bin.classList.add("fall");
    bin.addEventListener("transitionend", () => bin.remove());
  }
  if (item.classList[0] === "check-btn") {
    const complete = item.parentElement;
    complete.classList.toggle("rise");
  }
}

function showTask(e) {
  const task = todoItems.childNodes;
  console.log(e.target.value);
  console.log(task);
  task.forEach(function (todos) {
    switch (e.target.value) {
      case "all":
        todos.style.display = "flex";
        break;
      case "rise":
        if (todos.classList.contains("check-btn")) {
          todos.style.display = "flex";
        } else {
          todos.style.display = "none";
        }
        break;
      case "uncompleted":
        if (todos.classList.contains("delete-btn")) {
          todos.style.display = "flex";
        } else {
          todos.style.display = "none";
        }
        break;
    }
  });
}
