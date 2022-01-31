const form = document.getElementById('todo-form');
const todoInput = document.getElementById('todo');
const filterInput = document.getElementById('filter');
const todoList = document.getElementById('list-group');
const clearButton = document.getElementById('clear-todos');
const firstCardBody = document.querySelectorAll('.card-body')[0];
const secondCardBody = document.querySelectorAll('.card-body')[1];


addEventListeners();

function addEventListeners()
{
    form.addEventListener('submit',addTodo);

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


