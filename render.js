export default function render(items, todo_ulEl){
  todo_ulEl.innerHTML = '';
  items.forEach(item => {
    todo_ulEl.appendChild(document.createElement('li')).innerHTML = item.title
  })
}