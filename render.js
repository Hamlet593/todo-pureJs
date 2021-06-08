import handleRemove from "./delete.js";

export default function render(todoList, todo_ulElement){
    todo_ulElement.innerHTML = '';
    todoList.forEach(item => {
        const creatingLi = document.createElement('li');
        todo_ulElement.appendChild(creatingLi).innerHTML = (
            `
            <div>
            <input type="checkbox">
            ${item.title}
            <Button>Delete</Button>
            </div>`
            )
            creatingLi.onclick = function(){
                handleRemove(item.id)
            }
        })
    }