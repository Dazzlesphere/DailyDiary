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
        done: false
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
    printTodoList();
    todoInput.value = '';
}

function createTodoItem(item) {
    const todoItem = document.createElement('div');
    todoItem.classList.add('item');
    todoItem.setAttribute('data-id', item.id);

    if (item.done) {
        todoItem.classList.add('done');
    }

    const todoText = document.createElement('div');
    todoText.classList.add('todo-text');
    todoText.innerText = item.text;

    const todoStatus = document.createElement('div');
    const checkIcon = document.createElement('i');

    checkIcon.classList.add('fa-solid', 'fa-check');
    todoStatus.classList.add('todo-status');

    todoStatus.appendChild(checkIcon);
    todoItem.appendChild(todoStatus);
    todoItem.appendChild(todoText);
    return todoItem;
}

function printTodoList() {
    todoListContainer.innerHTML = '';
    todoList.forEach(function(entry) {
        todoListContainer.appendChild(createTodoItem(entry));
    });
}


todoAdd.addEventListener('click', handleAdd);

// Add an event handler on todoListContainer 
todoListContainer.addEventListener('click', function(e) {
    let targ = e.target;
    let todoItem = null;

    while (!todoItem) {
        if (targ.classList.contains('item')) {
            todoItem = targ;
        }
        targ = targ.parentElement;
    }


    if (todoItem) {
        const itemId = todoItem.getAttribute('data-id');
        todoList.find(function(obj) {
            if (obj.id == itemId) {
                obj.done = true;
                printTodoList();
            }
        });
    
    }
});

printTodoList();