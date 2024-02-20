const taskInput = document.getElementById('task-input');
const todoForm = document.getElementById('todo-form');
const taskList = document.getElementById('task-list');

todoForm.addEventListener('submit', addTask);

function addTask(event) {
  event.preventDefault(); // Prevent form submission
  const taskText = taskInput.value.trim(); // Get task text
  if (taskText !== '') {
    const taskItem = document.createElement('li'); // Create new task item
    taskItem.textContent = taskText;// Set task text
    taskList.appendChild(taskItem);// Append task item to task list
    taskInput.value = '';//Clear input field
  }
}

taskList.addEventListener('click', removeTask);

function removeTask(event) {
  if (event.target.tagName === 'LI') {
    event.target.remove();// Remove the clicked task item
  }
}
