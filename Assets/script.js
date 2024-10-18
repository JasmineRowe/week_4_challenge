let tasks = [];
let completedtasks = [];

document.addEventListener("DOMContentLoaded", () => {
  const storedTasks = JSON.parse(localStorage.getItem('tasks'))
  if (storedTasks){
    storedTasks.forEach((task) => tasks.push(task))
    updateTaskList();
    updateCompletedTaskList();
  };
});

const saveTasks = () => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
    localStorage.setItem("completedtasks", JSON.stringify(completedtasks))
};

const addTask = () => {
  const taskInput = document.getElementById("taskInput");
  const taskVal = taskInput.value.trim();

  if (taskVal) {
    tasks.push({text:taskVal});
    taskInput.value = "";
    updateTaskList();
    saveTasks();
  };
};

const updateCompletedTaskList = () => {
  const completedtaskListTable = document.getElementById("completedtasktable");
    completedtaskListTable.innerHTML = "";
    completedtasks.forEach((completedtask, index) => {
      const newCompletedTaskRow = completedtaskListTable.insertRow(-1);
        newCompletedTaskRow.innerHTML =  `
            <tr>
              <td>${completedtask.text}</td>
              <td><button class="deleteButton" id="deleteButton" onclick="deletecompletedItem(${index})">Delete Item </button></td>
            </tr>
        `;
        completedtaskListTable.appendChild(newCompletedTaskRow);
    });
};

const deletecompletedItem = (index) => {
  completedtasks.splice(index,1);
  updateCompletedTaskList();  
}

const deleteItem = (index) => {
  tasks.splice(index,1);
  updateTaskList();  
};
  
const editItem = (index) => {
  const taskInput = document.getElementById("taskInput")
  taskInput.value = tasks[index].text
  tasks.splice(index,1);
  updateTaskList();
};
  
const moveToCompleted = (index) => {
  completedtasks.push(tasks[index]); 
  tasks.splice(index,1);
  updateTaskList();
  updateCompletedTaskList();
};
  
const updateTaskList = () => {
  const taskListTable = document.getElementById("taskList");
  taskListTable.innerHTML = "";
  tasks.forEach((task, index) => {
    const newTaskRow = taskListTable.insertRow(-1);
    newTaskRow.innerHTML =  `     
        <td>${task.text}</td>
        <td><button class="complete-btn" id="completeButton" onclick="moveToCompleted(${index})">Mark as Complete </button>
            <button class="edit-btn" id="editButton" onclick="editItem(${index})">Edit Item </button>
            <button class="deleteButton" id="deleteButton" onclick="deleteItem(${index})">Delete Item </button>
        </td>
`;
  taskListTable.appendChild(newTaskRow);
  });
};

document.getElementById("add-task-btn").addEventListener("click", function (e){
  e.preventDefault();
  addTask ();
})
  
 
 








