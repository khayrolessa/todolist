const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        const li = document.createElement('li');
        li.innerText = taskText;

        const removeButton = document.createElement('button');
        removeButton.innerText = 'Remover';
        removeButton.onclick = function () {
            li.remove();
        };

        li.appendChild(removeButton);
        taskList.appendChild(li);

        taskInput.value = '';
    }
}

taskInput.addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
        addTask();
    }
});
