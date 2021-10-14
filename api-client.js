
const url = "http://localhost:3000/"

async function getAllTodos() {
    try{
        await fetch(`${url}`, { headers: {'Content-Type': 'application/json'},})
            .then((response) => response.json())
            .then((data) => {
            toTheDom(data)
            toDoCounter(data)
        })
    }
    catch(err){
        console.log(err)
    }
}
   
async function makeNewTodo(event){
    try{
        event.preventDefault()
        const input = userInput.value
        const data = {todo: `${input}`, done: "false"}
            await fetch(url, {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json",
                },
              })
            }
            catch(err){
                console.log(err)
            }
}

async function deleteTodo(id){
    try{
        await fetch(`${url}${id}`,{
            method: "DELETE",
             })
    }
    catch(err){
        console.log(err)
    }
}

async function setTodoToStatus(id, checkbox){
    try{
        const data = {}
        if (checkbox.checked == false){
            data = { done: "false"}
        }
        else {
            data = { done: "true"}
        }
        await fetch(`${url}${id}`,{
            method: "PUT",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        })
    }
    catch(err){
        console.log(err)
    }
}

