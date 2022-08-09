"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.onCreateTask = onCreateTask;

var _renderer = require("./renderer.js");

var _storage = require("./storage.js");

var _tasksGateway = require("./tasksGateway.js");

function onCreateTask() {
  const taskTitleInputElem = document.querySelector('.task-input');
  const text = taskTitleInputElem.value;
  if (!text) return;
  taskTitleInputElem.value = '';
  const newTask = {
    text,
    done: false,
    createDate: new Date().toISOString()
  };
  (0, _tasksGateway.creatTask)(newTask).then(() => (0, _tasksGateway.getTasksList)()).then(newTasksList => {
    (0, _storage.setItem)('tasksList', newTasksList);
    (0, _renderer.renderTasks)(); // taskTitleInputElem.value = '';
  });
} // 1. Prepare data
// 2. Write data to Data Base
// 3. Read new data from server
// 4. Save new data to front-end storage
// 5. Update UI based on new data