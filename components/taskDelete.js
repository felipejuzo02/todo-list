const ButtonDelete = () => {
  const deleteButton = document.createElement('span')
  deleteButton.classList.add('material-icons')
  deleteButton.innerText = 'delete'

  deleteButton.addEventListener('click', deleteTask)

  return deleteButton
}

const deleteTask = (event) => {
  const buttons = event.target.parentElement
  const completeTask =  buttons.parentElement

  completeTask.remove()
  alert("Tarefa excluida com sucesso!")
}

export default ButtonDelete