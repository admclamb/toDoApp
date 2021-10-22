"use strict";

const input = document.querySelector("#task");
const submit = document.querySelector("#submit");
const taskList = document.getElementById("task-container");

submit.addEventListener("click", main);
taskList.addEventListener("click", deleteComplete);

function main() {
  if (input.value !== "") {
    createTaskElement();
  } else {
    alert("You must put in a task!");
  }
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
