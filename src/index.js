document.addEventListener("DOMContentLoaded", () => {

  const form = document.getElementById('create-task-form')
  const taskList = document.getElementById('tasks')
  const taskName = document.getElementById('new-task-description')

  function buildTaskList() {
    let task = document.createElement("li")
    task.textContent = taskName.value + ' '
    let button = document.createElement("button")
    button.textContent = 'x'
    task.appendChild(button)

    return task
  }

  function addOtherTasks() {
    event.preventDefault()
    task = buildTaskList()
    list.appendChild(task)
    event.target.reset()
  }
  form.addEventListener("submit", addOtherTasks)
});
