const todoInput = document.querySelector('.todo-input');
const todoAdd = document.querySelector('.todo-add');
const todoListContainer = document.querySelector('.todo-list');

const todoList = [
    {
        id: 1,
        text: "Going to do Shopping",
        done: false,
    },
    {
        id: 2,
        text: "Meeting with friends",
        done: true
    },
    {
        id: 3,
        text: "Going to study",
        done: false
    }
];

function addTodoItem() {
    if (todoInput.value.length > 0) {
        let newTodo = {
            id: todoList.length + 1,
            text: todoInput.value,
            done: false
        }
        todoList.push(newTodo);
    }
}

function handleAdd() {
    addTodoItem();
    todoListContainer.innerHTML = '';
    printTodoList();
    todoInput.value = '';
}

function createTodoItem(item) {
    const todoItem = document.createElement('div');
    todoItem.classList.add('item');

    const todoText = document.createElement('div');
    todoText.classList.add('todo-text');
    todoText.innerText = item.text;

    todoItem.appendChild(todoText);
    return todoItem;
}

function printTodoList() {
    todoList.forEach(function(entry) {
        todoListContainer.appendChild(createTodoItem(entry));
    });
}


todoAdd.addEventListener('click', handleAdd);
printTodoList();