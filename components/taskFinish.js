const ButtonFinish = () => {
  const doneButton = document.createElement('span')
  doneButton.classList.add('material-icons')
  doneButton.innerText = 'done'

  doneButton.addEventListener('click', finishTask)

  return doneButton
}

const finishTask = (event) => {
  const buttons = event.target.parentElement
  const taskCompleted = buttons.parentElement

  taskCompleted.classList.toggle('task-done')
}

export default ButtonFinish