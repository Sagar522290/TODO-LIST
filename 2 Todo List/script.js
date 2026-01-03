const inputBox = document.getElementById('inputBox');
const addBtn = document.getElementById('addBtn');
const todoList = document.getElementById('todoList');


let editTodo = null;
// Function to add to do
const addTodo = () => {
    const inputText = inputBox.value.trim();
    if (inputText.length <= 0) {
        alert('Hello')
        return false;
    }

    if (addBtn.value === "Edit") {
        editTodo.target.previousElementSibling.innerHTML = inputText;
        editLocalTodos(inputText);
        addBtn.value = "Add";
        inputBox.value = "";
    }
    else {

        //Creating P  Element
        const li = document.createElement("li");
        const p = document.createElement("p");
        p.innerHTML = inputText;
        li.appendChild(p);

        //Creating edit Btn
        const editBtn = document.createElement("button");
        editBtn.classList.add("btn", "editBtn")
        editBtn.innerText = "Edit";
        li.appendChild(editBtn);

        //Creating delete Btn
        const deleteBtn = document.createElement("button");
        deleteBtn.classList.add("btn", "deleteBtn")
        deleteBtn.innerText = "Remove";
        li.appendChild(deleteBtn);



        todoList.appendChild(li);
        inputBox.value = "";

        saveLocalTodos(inputText);
    }
}
// Function to update : (Edit/Delete) to do
const updateTodo = (e) => {
    // console.log(e.target.innerHTML);
    if (e.target.innerHTML === "Remove") {
        todoList.removeChild(e.target.parentElement);
        deleteLocalTodos(e.target.parentElement);
    }
    if (e.target.innerHTML === "Edit") {
        inputBox.value = e.target.previousElementSibling.innerHTML;
        inputBox.focus();
        addBtn.value = "Edit";
        editTodo = e;
    }
}
// Function to save to do 
const saveLocalTodos = (todo) => {
    let todos;
    if (localStorage.getItem("todos") === null) {
        todos = [];
    }
    else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    // console.log(localStorage.getItem("todos"));
    // console.log(JSON.parse(localStorage.getItem("todos")));
    todos.push(todo);
    localStorage.setItem("todos", JSON.stringify(todos));
}
// Function to getLocal to do 
const getLocalTodos = () => {
    let todos;
    if (localStorage.getItem("todos") === null) {
        todos = [];
    }
    else {
        todos = JSON.parse(localStorage.getItem("todos"));
        todos.forEach(todo => {
            //Creating P  Element
            const li = document.createElement("li");
            const p = document.createElement("p");
            p.innerHTML = todo;
            li.appendChild(p);

            //Creating edit Btn
            const editBtn = document.createElement("button");
            editBtn.classList.add("btn", "editBtn")
            editBtn.innerText = "Edit";
            li.appendChild(editBtn);

            //Creating delete Btn
            const deleteBtn = document.createElement("button");
            deleteBtn.classList.add("btn", "deleteBtn")
            deleteBtn.innerText = "Remove";
            li.appendChild(deleteBtn);


            todoList.appendChild(li);
        });
    }
}
// Function to deleteLocal to do 
const deleteLocalTodos = (todo) => {
    let todos;
    if (localStorage.getItem("todos") === null) {
        todos = [];
    }
    else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    let todoText = todo.children[0].innerHTML;
    let todoIndex = todos.Indexof(todoText);
    todos.splice(todoIndex, 1);
    localStorage.setItem("todos", JSON.stringify(todos));
    // console.log(todoText.children[0].innerHTML);

}
const editLocalTodos = (todo) => {
    let todos = JSON.parse(localStorage.getItem("todos"));
    let todoIndex = todos.Indexof(todo);
    todos[todoIndex] = inputBox.value;
    localStorage.setItem("todos", JSON.stringify(todos));
}
// document.addEventListener('DOMContentLoaded,getLocalTodos')
addBtn.addEventListener('click', addTodo);
todoList.addEventListener('click', updateTodo);
