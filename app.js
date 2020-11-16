// Slectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo');

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
    todo.addEventListener('transitionend', () => todo.remove());
  }
  if (item.className === 'completed-button') {
    const todo = item.parentElement;
    todo.classList.toggle('completed');
  }
}

function filterTodo(event) {
  const todos = todoList.childNodes;
  console.log(todos);
  todos.forEach((todo) => {
    switch (todo) {
      case 'all':
        todo.style.display = 'flex';
        break;
      case 'completed':
        if (todo.classList.contains('completed')) {
          todo.style.display = 'flex';
        } else {
          todo.style.display = 'none';
        }
        break;
      case 'due':
        if (!todo.classList.contains('due')) {
          todo.style.display = 'flex';
        } else {
          todo.style.display = 'none';
        }
        break;
    }
  });
}

// Event Listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', handleButtonClick);
filterOption.addEventListener('click', filterTodo);
