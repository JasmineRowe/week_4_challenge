




const taskElement = document.getElementById("addTask");

const taskButtonElement = document.getElementById("add-task-btn");


const button = document.createElement('button');

button.innerText = 'Completed';

button.id = 'mainButton';

const taskVal = taskElement.value;

taskButtonElement.addEventListener("click", function() {

const taskVal = taskElement.value;

 // Get a reference to the table

 const taskListTable = document.getElementById("taskTable");

 // Insert a row at the end of the table

 const newTaskRowEl = taskListTable.insertRow(-1);

   // Insert a cell in the row at index 0

 const newTaskCell = newTaskRowEl.insertCell(0);
 
 newTaskCell.innerHTML = taskVal;

 const newTaskCell1 = newTaskRowEl.insertCell(1);

 newTaskCell1.appendChild(button);

})


