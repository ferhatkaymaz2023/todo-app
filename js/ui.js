
    class UI
    {

        static showAlert(type,message)
        {
            const alert = document.createElement('div');
            alert.className = `alert alert-${type}`;
            alert.textContent = message;

            document.querySelector('.card-body').appendChild(alert);

            setTimeout(() => {  alert.remove()  },1500);

        }


        static clearInputs(todoElement)
        {
            todoElement.value = '';
        }


        static addTodoToUI(newTodo)
        {
            const li = document.createElement('li');
            const a  = document.createElement('a');

            li.className = `list-group-item d-flex justify-content-between`;
            a.id = `#`;
            a.className = `delete-item`;
            a.innerHTML = `<i class = "fa fa-remove"></i>`;

            li.appendChild(document.createTextNode(newTodo));
            li.appendChild(a);

            document.querySelector('.list-group').appendChild(li);



        }

    }