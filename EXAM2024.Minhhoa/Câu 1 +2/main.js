document.getElementById('addTaskBtn').addEventListener('click', function () {
    const taskInput = document.getElementById('taskInput');
    const taskValue = taskInput.value.trim();

    taskInput.classList.remove('is-invalid');

    if (taskValue === '' || taskValue.length > 100) {
        taskInput.classList.add('is-invalid');
    } else {
        alert('Dữ liệu hợp lệ! Task "' + taskValue + '" đã sẵn sàng để thêm.');
        taskInput.value = '';
        const modalElement = document.getElementById('addTaskModal');
        const modalInstance = bootstrap.Modal.getInstance(modalElement);
        if (modalInstance) {
            modalInstance.hide();
        }
    }
});