
const toDoList = document.getElementById("todo-list")
const userInput = document.querySelector("#user-input")
const addTaskButton = document.getElementById("add-task-button")
const toDoCount = document.getElementById("todo-count")

addTaskButton.addEventListener("click",  makeNewTodo)

getAllTodos()


function toTheDom(array){
   array.map((item) => {
     const newLi = document.createElement("li")
     const checkBox = document.createElement("input")
     const todoText = document.createElement("p")
     const trashCan = document.createElement("div")
     checkBox.type = "checkbox"
     checkBox.classList.add("check_box")
     todoText.id =  `${item._id}`
     todoText.innerHTML = `${item.todo} `
     trashCan.innerHTML = `<i class="fas fa-trash-alt"></i>`
     trashCan.classList.add("trash_can")
     isCheckBoxChecked(checkBox, item, todoText)
     trashCan.addEventListener("click", () => deleteTodo(item._id))
     checkBox.addEventListener("click", () => setTodoToStatus(item._id, {done: checkBox.checked}))
     newLi.appendChild(checkBox)
     newLi.appendChild(todoText)
     newLi.appendChild(trashCan)
     toDoList.appendChild(newLi)
    })
}

// samantha ik heb gedaan wat je had laten zien ik heb alleen 1 vraag bij de if statement geef je alleen checkBox.checked 
// door. checked de if statement automatische voor true of false?  
function isCheckBoxChecked(checkBox,  item,todoText){
    checkBox.checked = item.done
    if (checkBox.checked) return todoText.classList.add("done")
    if (!checkBox.checked) return todoText.classList.remove("done")
}

// ik heb meteen jou systeem toegepast bij mijn todo counter dank je wel
function toDoCounter(array){
    const filteredArray = array.filter(item => item.done ===  true )
    const total = array.length
    const done = filteredArray.length
    const left = (total - done)
    if (total === 0) return  toDoCount.innerHTML = `There is nothing to do.`
    if (done === 0 && total === 1 ) return  toDoCount.innerHTML = `You have 1 task todo.`
    if (done === 0 && total > 1) return toDoCount.innerHTML = `You have ${left} tasks todo.`
    if (done > 0 && left > 0) return toDoCount.innerHTML = `${done} down ${left} to go.`
    if (done === 1 && left === 0) return  toDoCount.innerHTML = `Mission complete task done`
    if (done > 0 && left === 0) return toDoCount.innerHTML = `Mission Complete all tasks done.`
}
