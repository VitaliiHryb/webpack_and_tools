"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.onDeleteTask = onDeleteTask;

var _renderer = require("./renderer.js");

var _storage = require("./storage.js");

var _tasksGateway = require("./tasksGateway.js");

function onDeleteTask(event) {
  const isDeleteBtn = event.target.classList.contains('list-item__delete-btn');
  if (!isDeleteBtn) return;
  const taskId = event.target.parentNode.firstElementChild.dataset.id;
  (0, _tasksGateway.deleteTask)(taskId).then(() => (0, _tasksGateway.getTasksList)()).then(newTasksList => {
    (0, _storage.setItem)('tasksList', newTasksList);
    (0, _renderer.renderTasks)();
  });
}