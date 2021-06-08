import {state, setState} from './index.js'

export default function handleRemove(id){
    const newArr = state.todoList.filter(item => item.id !== id)
    setState(newArr)
}