import render from './render.js'

const todo_ulElement = document.querySelector('#todo-ulElement');
const todo_input = document.querySelector('#todo-input');
const todo_button = document.querySelector('#todo-button');
const deleteAll = document.querySelector('#deleteAll')

export const state = {
  todoList: [],
};

let currentValue = '';

todo_input.addEventListener('change', evt => {
  currentValue = evt.target.value;
})

export const setState = newState => {
  state.todoList = newState;
  render(state.todoList, todo_ulElement)
}

todo_button.addEventListener('click', () => {
  setState([
    ...state.todoList,
    {
      title: currentValue,
      id: state.todoList.length,
    }
  ])
})

deleteAll.addEventListener('click', () => {
  setState([])
})