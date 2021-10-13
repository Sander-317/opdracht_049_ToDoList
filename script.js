
const toDoList = document.getElementById("todo-list")
const userInput = document.querySelector("#user-input")
const addTaskButton = document.getElementById("add-task-button")
const toDoCount = document.getElementById("todo-count")

addTaskButton.addEventListener("click",  makeNewTodo)

getAllTodos()

function toTheDom(array){
const newArray = []
 array.map((item) => {
     const newLi = document.createElement("li")
     const checkBox = document.createElement("input")
     const todoText = document.createElement("p")
     const trashCan = document.createElement("div")
     trashCan.innerHTML = `<i class="fas fa-trash-alt"></i>`
     trashCan.classList.add("trash_can")
     todoText.id =  `${item._id}`
     checkBox.type = "checkbox"
     isCheckBoxChecked(checkBox, item, todoText)
     trashCan.addEventListener("click", () => deleteTodo(item._id))
     checkBox.addEventListener("click", () => setTodoToStatus(item._id, checkBox))
     todoText.innerHTML = `${item.todo} `
     newLi.appendChild(checkBox)
     newLi.appendChild(todoText)
     newLi.appendChild(trashCan)
    toDoList.appendChild(newLi)
    })
}

function isCheckBoxChecked(checkBox,  item,todoText){
    if (item.done == "true"){
        checkBox.checked = true
        todoText.classList.add("done")
        todoText.classList.add("p:after")
    }
    else {
        checkBox.checked = false
        todoText.classList.remove("done")
        todoText.classList.remove("p:after")
    }
}
