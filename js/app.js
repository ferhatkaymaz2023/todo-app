const form = document.getElementById('todo-form');
const todoInput = document.getElementById('todo');
const filterInput = document.getElementById('filter');
const todoList = document.querySelector(".list-group");
const clearButton = document.getElementById('clear-todos');
const firstCardBody = document.querySelectorAll('.card-body')[0];
const secondCardBody = document.querySelectorAll('.card-body')[1];


addEventListeners();

function addEventListeners()
{
    form.addEventListener('submit',addTodo);
    document.addEventListener('DOMContentLoaded',loadAllTodos);
    secondCardBody.addEventListener('click',deleteTodo);
    filterInput.addEventListener('keyup',filterTodo);
    clearButton.addEventListener('click',clearAllTodos);

}

function addTodo(e)
{   
    const newTodo = todoInput.value.trim();

    if(newTodo === "")
    {
        UI.showAlert('warning','Please e todo ');
    }
    else 
    {
        UI.addTodoToUI(newTodo);
        Storage.addTodoToStorage(newTodo);
        UI.showAlert('success','Todo input is sended');
    }

    UI.clearInputs(todoInput);
    e.preventDefault();
}

function loadAllTodos()
{
    let todos = Storage.getTodosFromStorage();
    todos.forEach(todo => UI.addTodoToUI(todo));

}

function deleteTodo(e)
{
    e.target.className === 'fa fa-remove' && UI.deleteTodoFromUI(e.target) || Storage.deleteTodoFromStorage(e.target.parentElement.parentElement.textContent);
}

function filterTodo(e)
{
    const filterValue = e.target.value.trim();
    const listItems = document.querySelectorAll('.list-group-item');

    listItems.forEach((item,index) => {
        const text = item.textContent.toLocaleLowerCase();
        text.indexOf(filterValue) === -1 
            ? item.setAttribute('style','display:none !important') 
            : item.setAttribute('style','display:block');
    });


}


function clearAllTodos()
{
    while(todoList.firstElementChild)
    {
        todoList.firstElementChild.remove();
    }

}