var todoInput = document.querySelector("#todo-text");
var todoForm = document.querySelector("#todo-form");
var todoList = document.querySelector("#todo-list");
var todoCountSpan = document.querySelector("#todo-count");

var todos = [];//this is an empty array

// TODO: What is the purpose of this function?
//This RenderTodos will show us the Todos on the webpage (render them on the webpage)
function renderTodos() {
  // TODO: Describe the functionality of the following two lines of code.
  
  todoList.innerHTML = "";//this will change todoList in HTML to somethig else
  todoCountSpan.textContent = todos.length; //will count how many todos there are
  
  // TODO: Describe the functionality of the following `for` loop.
  // todos will increase by 1 but never go below 0
  for (var i = 0; i < todos.length; i++) {
    var todo = todos[i];

    var li = document.createElement("li");
    li.textContent = todo;
    li.setAttribute("data-index", i);

    var button = document.createElement("button");
    button.textContent = "Complete ✔️";

    li.appendChild(button);
    todoList.appendChild(li);
  }
}

// TODO: What is the purpose of the following function?
// init can set uo temporary files to store results?? //////////????
function init() {
  // TODO: What is the purpose of the following line of code?
  //The given line of code retrieves the value associated with the key "todos" from the localStorage 
  //object and assigns it to the variable storedTodos
  var storedTodos = JSON.parse(localStorage.getItem("todos"));
  // TODO: Describe the functionality of the following `if` statement.
  if (storedTodos !== null) {
    todos = storedTodos;
  }// NULL if youve never been to the page
  // TODO: Describe the purpose of the following line of code.
  //
  renderTodos();
}

function storeTodos() {
  // TODO: Describe the purpose of the following line of code.
  localStorage.setItem("todos", JSON.stringify(todos));
}
// TODO: Describe the purpose of the following line of code.
todoForm.addEventListener("submit", function(event) {
  event.preventDefault();
  var todoText = todoInput.value.trim();
  // TODO: Describe the functionality of the following `if` statement.
  if (todoText === "") {
    return;
  }
 // TODO: Describe the purpose of the following lines of code.
  todos.push(todoText);
  todoInput.value = "";
 
  // TODO: What will happen when the following functions are called?
  storeTodos();
  renderTodos();
});

// TODO: Describe the purpose of the following line of code.
todoList.addEventListener("click", function(event) {
  var element = event.target;
  // TODO: Describe the functionality of the following `if` statement.
  if (element.matches("button") === true) {
    var index = element.parentElement.getAttribute("data-index");//removes item from list when clicked
    todos.splice(index, 1);
    //splice will cut the array by 1 when something is clicked
    // TODO: What will happen when the following functions are called?
    storeTodos();
    renderTodos();
  }
});

init();
