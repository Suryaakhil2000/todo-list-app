document.getElementById('add-btn').addEventListener('click', function() {
    const input = document.getElementById('todo-input');
    const newTask = input.value.trim();

    if (newTask) {
        // Create a new list item
        const li = document.createElement('li');
        li.textContent = newTask;

        // Add a delete button to the task
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = '❌';
        deleteBtn.onclick = function() {
            li.remove();
        };

        li.appendChild(deleteBtn);
        document.getElementById('todo-list').appendChild(li);

        // Clear input field after adding the task
        input.value = '';
    } else {
        alert('Please enter a task!');
    }
});
