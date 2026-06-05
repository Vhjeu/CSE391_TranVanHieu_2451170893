
let todos = JSON.parse(localStorage.getItem('todo_list')) || [];
let currentFilter = 'all';

const form = document.querySelector('#todoForm');
const input = document.querySelector('#todoInput');
const todoList = document.querySelector('#todoList');
const controls = document.querySelector('#controls');
const todoCount = document.querySelector('#todoCount');
const filterBtns = document.querySelectorAll('.filter-btn');
const clearBtn = document.querySelector('#clearCompleted');

function saveAndRender() {
    localStorage.setItem('todo_list', JSON.stringify(todos));
    render();
}

function render() {

    todoList.innerHTML = '';

    let filteredTodos = todos;
    if (currentFilter === 'active') {
        filteredTodos = todos.filter(t => !t.completed);
    } else if (currentFilter === 'completed') {
        filteredTodos = todos.filter(t => t.completed);
    }

    filteredTodos.forEach(todo => {
        const li = document.createElement('li');
        li.className = `todo-item ${todo.completed ? 'completed' : ''}`;
        li.dataset.id = todo.id;

        const span = document.createElement('span');
        span.className = 'todo-text';
        span.textContent = todo.text;

        const editInput = document.createElement('input');
        editInput.type = 'text';
        editInput.className = 'edit-input';
        editInput.value = todo.text;
        editInput.style.display = 'none';

        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'delete-btn';
        deleteBtn.textContent = '❌';

        li.appendChild(span);
        li.appendChild(editInput);
        li.appendChild(deleteBtn);

        todoList.appendChild(li);
    });

    const activeCount = todos.filter(t => !t.completed).length;
    todoCount.textContent = `${activeCount} item${activeCount !== 1 ? 's' : ''} left`;

    controls.classList.toggle('hidden', todos.length === 0);
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const text = input.value.trim();
    if (text) {
        todos.push({
            id: Date.now(),
            text: text,
            completed: false
        });
        input.value = '';
        saveAndRender();
    }
});


todoList.addEventListener('click', (e) => {
    // Tìm thẻ li chứa phần tử vừa click
    const li = e.target.closest('.todo-item');
    if (!li) return;
    const id = Number(li.dataset.id);


    if (e.target.classList.contains('delete-btn')) {
        todos = todos.filter(t => t.id !== id);
        saveAndRender();
    }

    else if (e.target.classList.contains('todo-text')) {
        const todo = todos.find(t => t.id === id);
        if (todo) {
            todo.completed = !todo.completed;
            saveAndRender();
        }
    }
});

todoList.addEventListener('dblclick', (e) => {
    if (e.target.classList.contains('todo-text')) {
        const li = e.target.closest('.todo-item');
        const span = li.querySelector('.todo-text');
        const input = li.querySelector('.edit-input');

        span.style.display = 'none';
        input.style.display = 'block';
        input.focus();
    }
});

function saveEdit(inputElement) {
    const li = inputElement.closest('.todo-item');
    if (!li) return;

    const id = Number(li.dataset.id);
    const newText = inputElement.value.trim();

    if (newText) {
        const todo = todos.find(t => t.id === id);
        if (todo) todo.text = newText;
    } else {

        todos = todos.filter(t => t.id !== id);
    }
    saveAndRender();
}

todoList.addEventListener('keyup', (e) => {
    if (e.target.classList.contains('edit-input') && e.key === 'Enter') {
        saveEdit(e.target);
    }
});

todoList.addEventListener('focusout', (e) => {
    if (e.target.classList.contains('edit-input')) {
        saveEdit(e.target);
    }
});

// ==========================================
// 6. BỘ LỌC (FILTER) & XÓA COMPLETED
// ==========================================
document.querySelector('#filters').addEventListener('click', (e) => {
    if (e.target.classList.contains('filter-btn')) {

        filterBtns.forEach(btn => btn.classList.remove('active'));
        e.target.classList.add('active');

        currentFilter = e.target.dataset.filter;
        render();
    }
});

clearBtn.addEventListener('click', () => {
    todos = todos.filter(t => !t.completed);
    saveAndRender();
});

// ==========================================
// KHỞI CHẠY LẦN ĐẦU
// ==========================================
render();