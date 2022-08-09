"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.onToggleTask = onToggleTask;

var _renderer = require("./renderer.js");

var _storage = require("./storage.js");

var _tasksGateway = require("./tasksGateway.js");

function onToggleTask(event) {
  const isCheckbox = event.target.classList.contains('list-item__checkbox');
  if (!isCheckbox) return;
  const taskId = event.target.dataset.id;
  const done = event.target.checked;
  const tasksList = (0, _storage.getItem)('tasksList');
  const {
    text,
    createDate
  } = tasksList.find(task => task.id === taskId);
  const updatedTask = {
    text,
    createDate,
    done,
    finishDate: done ? new Date().toISOString() : null
  };
  (0, _tasksGateway.updateTask)(taskId, updatedTask).then(() => (0, _tasksGateway.getTasksList)()).then(newTasksList => {
    (0, _storage.setItem)('tasksList', newTasksList);
    (0, _renderer.renderTasks)();
  });
} // 1. Prepare data
// 2. Update data in db (Data Base)
// 3. Read new data from server
// 4. Save new data to front-end storage
// 5. Update UI based on new data