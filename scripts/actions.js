(() => {
  const addTask = (event) => {
    event.preventDefault()

    const input = document.querySelector('[data-input]')
    const list = document.querySelector('[data-list]')

    if (input.value) {
      const task = document.createElement('li')
      const divIcons = document.createElement('div')
      task.classList.add('tasks-list')
      const content = `<p>${input.value}</p>`
      task.innerHTML = content

      
      list.appendChild(task)
      input.value = ""

      task.appendChild(divIcons)
      divIcons.appendChild(ButtonDelete())
      divIcons.appendChild(ButtonFinish())
    } else {
      alert("Favor digite um algo para poder adicionar")
    }
  }

  const button = document.querySelector('[data-button]')
  button.addEventListener('click', addTask)

  const ButtonFinish = () => {
    const doneButton = document.createElement('span')
    doneButton.classList.add('material-icons')
    doneButton.innerText = 'done'

    doneButton.addEventListener('click', finishTask)

    return doneButton
  }

  const ButtonDelete = () => {
    const deleteButton = document.createElement('span')
    deleteButton.classList.add('material-icons')
    deleteButton.innerText = 'delete'

    deleteButton.addEventListener('click', deleteTask)

    return deleteButton
  }

  const finishTask = (event) => {
    const buttons = event.target.parentElement
    const taskCompleted = buttons.parentElement

    taskCompleted.classList.toggle('task-done')
  }

  const deleteTask = (event) => {
    const buttons = event.target.parentElement
    const completeTask =  buttons.parentElement

    completeTask.remove()
    alert("Tarefa excluida com sucesso!")
  }
})()