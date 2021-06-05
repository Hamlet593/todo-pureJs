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

let deleteButton = document.createElement('Button');
deleteButton.innerHTML = ' X';

deleteButton.addEventListener('click', () => {
  todo_ulEl.li.innerHTML = '';
})

function render(items, todo_ulEl){
  todo_ulEl.innerHTML = '';
  items.forEach(item => {
    todo_ulEl.appendChild(document.createElement('li')).innerHTML = item.title + deleteButton.innerHTML;

  })
}

