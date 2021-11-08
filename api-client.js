
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
        const data = {todo: `${input}`, done: false}
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
    //  dit heb ik gedaan zodat je niet meer de heletijd op refresh moet drukken
    //  het rare is dat ik zelf het probleem niet had
    //  en als ik nu  iets toevoeg of op de checkbox click dan verschijnen alle todos 2x voor een sec ongeveer en dan verdijnt de helft  
    getAllTodos() 
    
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
    //  HERHALING VAN COMMENT HIER BOVEN 
    //  dit heb ik gedaan zodat je niet meer de heletijd op refresh moet drukken
    //  het rare is dat ik zelf het probleem niet had
    //  en als ik nu  iets toevoeg of op de checkbox click dan verschijnen alle todos 2x voor een sec ongeveer en dan verdijnt de helft
    getAllTodos()
    
}

async function setTodoToStatus(id, data){
    try{
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
    //  HERHALING VAN COMMENT HIER BOVEN
    //  dit heb ik gedaan zodat je niet meer de heletijd op refresh moet drukken
    //  het rare is dat ik zelf het probleem niet had
    //  en als ik nu  iets toevoeg of op de checkbox click dan verschijnen alle todos 2x voor een sec ongeveer en dan verdijnt de helft
    getAllTodos()
    
}

