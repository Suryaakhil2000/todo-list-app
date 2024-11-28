# 📝 To-Do List Application  

**A minimalist, dynamic, and responsive to-do list application that empowers users to stay organized and productive.**  
This project is built with simplicity in mind and provides an intuitive interface to help users manage tasks efficiently.  

---

## 🌟 Features  

### ✅ Effortless Task Management  
- **Add Tasks:** Easily create tasks with a single click.  
- **Mark Tasks as Completed:** Highlight completed tasks to track progress.  
- **Delete Tasks:** Remove unnecessary or completed tasks effortlessly.  

### 🎨 Modern Design  
- Clean, user-friendly interface for a seamless experience.  
- Fully responsive design ensures usability across desktops, tablets, and mobile devices.  

### 💡 Lightweight and Fast  
- No external libraries or frameworks—just HTML, CSS, and JavaScript for optimal performance.  

---

## 🏗️ Project Architecture  

### Directory Structure  
```plaintext
todo-list-app/
│
├── index.html    # The structure of the app  
├── styles.css    # Modern styling for responsiveness and aesthetics  
├── script.js     # Dynamic behavior and interactivity  
└── README.md     # Detailed documentation for the project  


Core Components
**1. index.html:** The Backbone
Provides the structure for the app, including input fields for task creation, a task list container, and essential buttons for user interaction.

html
Copy code
<div class="todo-app">
  <h1>To-Do List</h1>
  <input type="text" id="task-input" placeholder="Add a new task" />
  <button id="add-task-btn">Add Task</button>
  <ul id="task-list"></ul>
</div>

**2. styles.css:** The Visual Appeal
Defines the layout, colors, and responsive elements of the app.

css
Copy code
.todo-app {
  max-width: 400px;
  margin: 50px auto;
  font-family: 'Arial', sans-serif;
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

#task-input {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

**3. script.js:** The Brain
Implements dynamic functionality, including adding, marking, and deleting tasks.

javascript
Copy code
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');
const addTaskBtn = document.getElementById('add-task-btn');

addTaskBtn.addEventListener('click', () => {
  const taskText = taskInput.value.trim();
  if (taskText) {
    const taskItem = document.createElement('li');
    taskItem.innerHTML = `${taskText} <button class="delete-btn">Delete</button>`;
    taskList.appendChild(taskItem);
    taskInput.value = '';
  }
});

taskList.addEventListener('click', (e) => {
  if (e.target.classList.contains('delete-btn')) {
    e.target.parentElement.remove();
  }
});
