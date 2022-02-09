//Selectors

const todoInput = document.querySelector('.to-do-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');





// Event Listeners

todoButton.addEventListener('click',addTodo);


//Functions

//prevent the page from refreshing
function addTodo(event) {
  event.preventDefault();


//ToDo Div
const todoDiv = document.createElement('div');
todoDiv.classList.add('todo');

//Create LI
const newTodo = document.createElement('li');
newTodo.innerText = todoInput.value
newTodo.classList.add("todo-item");
todoDiv.appendChild(newTodo);

//Check mark button
const completeButton = document.createElement('button');
completeButton.innerHTML = '<i class="fas fa-check"></i>';
completeButton.classList.add('complete-btn');
todoDiv.appendChild(completeButton);

//trash mark button
const trashButton = document.createElement('button')
trashButton.innerHTML = `<i class="fas fa-trash" ></i>`
trashButton.classList.add('trash-btn');
todoDiv.appendChild(trashButton);

//APPEND TO LIST
todoList.appendChild(todoDiv)

//Clear input value
todoInput.value = ""
}
