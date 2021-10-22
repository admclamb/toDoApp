"use strict";

const input = document.querySelector("#task");
const submit = document.querySelector("#submit");
const taskList = document.getElementById("task-container");

submit.addEventListener("click", main);
taskList.addEventListener("click", deleteComplete);

function main() {
  createTaskElement();
  input.value = "";
}

function deleteComplete(event) {
  const item = event.target;
  console.log(item);
  if (item.classList[3] === "deleteBtn") {
    const task = item.parentElement.parentElement;
    task.remove();
  }
  if (item.classList[4] === "completeBtn") {
    const task = item.parentElement.parentElement;
    task.remove();
    alert("Congrats on completing a task!");
  }
}

function createTaskElement() {
  const mainDiv = document.createElement("div");
  const header = document.createElement("h3");
  const subDiv = document.createElement("div");
  const completeTask = document.createElement("button");
  const deleteTask = document.createElement("button");
  const color = document.querySelector('input[name="colors"]:checked').value;
  mainDiv.classList.add(
    `bg-${color}`,
    "text-white",
    "p-4",
    "d-flex",
    "justify-content-between",
    "align-items-center"
  );
  completeTask.classList.add(
    "btn",
    "btn-lg",
    "btn-light",
    "me-3",
    "completeBtn"
  );
  deleteTask.classList.add("btn", "btn-lg", "btn-light", "deleteBtn");
  header.textContent = input.value;
  completeTask.textContent = "Completed";
  deleteTask.textContent = "Delete";

  //   CHECK IF CAN PUT IN ONE DIV
  subDiv.appendChild(completeTask);
  subDiv.appendChild(deleteTask);
  mainDiv.appendChild(header);
  mainDiv.appendChild(subDiv);
  taskList.insertBefore(mainDiv, taskList.firstChild);
}
// submitBtn.addEventListener("click", submitData);
// Need to gather the info from input
// Add button to work
// Create div with:
// Data
// Color
// flex center
// Delete Button

// const getId = function () {
//   const containerSize = taskContainer.getElementsByTagName("div").length;
//   console.log(containerSize);
//   const newId = `task${containerSize}`;
//   console.log(newId);
//   return newId;
// };

// const createTaskElement = function (data, id) {
//   const newDiv = document.createElement("div");
//   const newContent = document.createTextNode(data);
//   const newBtn = document.createElement("div");
//   newBtn.textContent = "Delete";
//   newBtn.innerHTML =
//     '<button class="btn btn-light" onclick="deleteDiv(this.value)">Delete</button>';
//   newDiv.setAttribute("id", id);
//   newDiv.appendChild(newContent);
//   newDiv.appendChild(newBtn);
//   taskContainer.insertBefore(newDiv, taskContainer.firstChild);
//   //taskContainer.appendChild(newDiv);
// };

// const styleTaskElement = function (id) {
//   let div = document.getElementById(id);
//   const color = document.querySelector('input[name="colors"]:checked').value;
//   console.log(color);
//   div.classList.add("container");
//   div.classList.add(`bg-${color}`);
//   div.classList.add("text-white");
//   div.classList.add("p-4");
//   div.classList.add("d-flex");
//   div.classList.add("justify-content-between");
// };

// const deleteDiv = function () {};

// const verifyData = function (test = 0) {
//   if (test === 0) {
//     return false;
//   } else {
//     return true;
//   }
// };
// submitBtn.addEventListener("click", function () {
//   const data = taskElement.value;
//   const dataMutable = data;
//   if (verifyData(dataMutable)) {
//     taskElement.value = "";
//     const id = getId();
//     createTaskElement(data, id);
//     styleTaskElement(id);
//   } else {
//     alert("You put in no task, please try again.");
//   }
// });
