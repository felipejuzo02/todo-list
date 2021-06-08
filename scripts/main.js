import ButtonFinish from '../components/taskFinish.js'
import ButtonDelete from '../components/taskDelete.js'

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