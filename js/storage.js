

    class Storage
    {
        static getTodosFromStorage()
        {
            let todos;
            return localStorage.getItem('todos') === null ? todos = [] : todos = JSON.parse(localStorage.getItem('todos'));
        }


        static addTodoToStorage(newTodo)
        {
            let todos = this.getTodosFromStorage();
            todos.push(newTodo);
            localStorage.setItem('todos',JSON.stringify(todos));
        }
    }