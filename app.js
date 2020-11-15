// Slectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

// Functions
function addTodo(event) {
  // Prevent form from submitting
  event.preventDefault();
  // Todo div
  const todoDiv = document.createElement('div');
  todoDiv.classList.add('todo');
  // Create list
  const newTodo = document.createElement('li');
  newTodo.innerText = todoInput.value;
  newTodo.classList.add('todo-item');
  todoDiv.appendChild(newTodo);
  // Check mark button
  const completedButton = document.createElement('button');
  completedButton.innerHTML = '<i class="fas fa-check"></i>';
  completedButton.classList.add('completed-button');
  todoDiv.appendChild(completedButton);
  // Check trash button
  const trashButton = document.createElement('button');
  trashButton.innerHTML = '<i class="fas fa-trash"></i>';
  trashButton.classList.add('trash-button');
  todoDiv.appendChild(trashButton);
  // Append to list
  todoList.appendChild(todoDiv);
  todoInput.value = '';
}

function handleButtonClick(event) {
  const item = event.target;
  if (item.className === 'trash-button') {
    const todo = item.parentElement;
    todo.classList.add('fall');
    todo.addEventListener('transitionend', function () {
      todo.remove();
    })
  }
  if (item.className === 'completed-button') {
    const todo = item.parentElement;
    todo.classList.toggle('completed');
  }
}

// Event Listener

todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', handleButtonClick);