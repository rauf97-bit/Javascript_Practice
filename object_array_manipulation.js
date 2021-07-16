let list = document.querySelector(".list");
console.log(list);

list.firstElementChild.innerHTML = "<h1>Hello</h1>";
list.children[3].innerText = "Tom Clancy";
list.lastElementChild.textContent = "Hadley Chase";

let itemz = document.querySelectorAll(".items");
itemz.forEach((e) => console.log(e.textContent));

let btn_flex = document.querySelector(".btn");
btn_flex.addEventListener("click", function (e) {
  e.preventDefault();
  console.log(btn_flex.value);
  document.querySelector(".form-group").style.background = "red";
  function submit() {
    document.querySelector("body").classList.add("bg-dark");
  }
  submit();

  //map filter flexible-styling

  todo = [
    {
      id: 1,
      task: "clean",
      status: true,
    },
    {
      id: 1,
      task: "sweep",
      status: false,
    },
    {
      id: 1,
      task: "mop",
      status: true,
    },
  ];

  console.table(todo);

  todo.forEach((todos) => {
    console.log(todos.task);
  });
  console.log(todo);

  let todoTask = todo.map(function (peek) {
    return peek.task;
  });

  console.log(todoTask);

  let todoStatus = todo.filter(function (peek) {
    return peek.status === true;
  });

  console.log(todoStatus);
});
