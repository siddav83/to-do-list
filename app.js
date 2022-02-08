//Selectors

const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');





// Event Listeners

todoButton.addEventListener('click',addTodo);


//Functions

//prevent the page from refreshing
function addTodo(event) {
  event.preventDefault();
}

//ToDo Div
const todoDiv = document.createElement('div');
todoDiv.classList.add('todo');

//Create LI
const newTodo = document.createElement('li');
newTodo.innerText = `hey`
todoDiv.appendChild(newTodo);

//Check mark button
const completeButton = document.createElement('button')
completeButton.innerHTML = '<i class="das fa-check" ></i>'
completeButton.classList.add('completed-button');
todoDiv.appendChild(completeButton);

//trash mark button
const trashButton = document.createElement('button')
trashButton.innerHTML = '<i class="das fa-trash" ></i>'
trashButton.classList.add('completed-button');
todoDiv.appendChild(trashButton);
