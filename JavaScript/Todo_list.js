const toDoForm = document.getElementById("todo_list-form");
const toDoInput = document.querySelector("#todo-list-form input");
const toDolist = document.getElementById("todo_list");


function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
}

toDoForm.addEventListener("submit", handleToDoSubmit);