const todo_inp = document.getElementById('todo_inp');
const add_todo = document.getElementById('add_todo');
const todo_result = document.getElementById('todo_result');

add_todo.addEventListener('click', (e) =>{
    e.preventDefault();

    let li = document.createElement('li');
    li.className = 'list-group-item ';
    li.innerHTML = `<div class="alert alert-dismissible"><a href="#" class="btn-close" data-bs-dismiss="alert" aria-label="close"></a>${todo_inp.value}</div>`  ;


    todo_result.appendChild(li);
    todo_inp.value = "";
})