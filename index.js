let counter = 0;

window.onload = () => {
    let todo = document.getElementById('textbox');
    todo.addEventListener('keyup', (e) => {
        if (e.key == 'Enter')
            document.getElementById('submit').click();
    });
}

function addTodo() {
    let text = document.getElementById('textbox').value;
    if (text.trim().localeCompare("") != 0) {

        let newTodo = "<li id='listitem" + counter + "'" + "style='list-style-type:none'> " + text;
        let checkBox = "<input class='checkBox'type='checkbox'/>"
        // let checkBoxButton = "<button class='checkBoxButton' ></button>"
        let deleteButton = "<button id=" + counter + " class = 'deleteButton' onClick='deleteTodo(this.id)'>🗑️</button> </li>"
        let todoList = document.getElementById('output').innerHTML;
        document.getElementById('output').innerHTML = todoList + newTodo + checkBox + deleteButton;
        counter++;
    }
}

function deleteTodo(id) {
    let listOfTodos = document.getElementById(id).parentElement.parentElement;
    listOfTodos.removeChild(document.getElementById("listitem" + id));

}