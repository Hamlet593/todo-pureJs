import render from './render.js'

const items = [];

let currentValue = '';

const todo_input = document.querySelector('#todo-input');
const todo_buton = document.querySelector('#todo-buton');
const todo_ulEl = document.querySelector('#todo-ulEl');

todo_input.addEventListener('change', evt => {
  currentValue = evt.target.value;
})

todo_buton.addEventListener('click', () => {
  items.push({title: currentValue, id: items.length});
  render(items, todo_ulEl)
})