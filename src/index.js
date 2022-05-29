  // 1. add event listener to form
document.addEventListener("DOMContentLoaded", () => {
  
  // grab form using selector
  const toDoForm = document.getElementById('create-task-form')
  
  // listen for submit event -> submit and then do something
  toDoForm.addEventListener('submit', handleSubmit)
  
});

function handleSubmit(event) {
  // prevent js from from reloading page after clicking create new task
  event.preventDefault()
  console.log('submitted')

  // grab value was typed into textbox (console log to print it to console, not needed) 
  console.log(event.target['new-task-description'].value)

  // get tasks to show 
  const taskList = document.getElementById('tasks')

  // create list item element and set element to task list
  const task = document.createElement('li')
  // set task text content to value typed in textbox
  task.textContent = event.target['new-task-description'].value

  // attach to task to task list
  taskList.append(task)

  // create delete button 
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'X';
  deleteButton.addEventListener('click', () => {
    task.removeChild();
  });

  task.append(deleteButton)

  // reset text field back to description
  event.target['new-task-description'].value = '';
  // another way to reset text can work for multiple fields
  // event.target.reset();
}