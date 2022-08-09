"use strict";

var _todoList = require("./todoList.js");

var _renderer = require("./renderer.js");

var _tasksGateway = require("./tasksGateway.js");

var _storage = require("./storage.js");

document.addEventListener('DOMContentLoaded', () => {
  (0, _tasksGateway.getTasksList)().then(tasksList => {
    (0, _storage.setItem)('tasksList', tasksList);
    (0, _renderer.renderTasks)();
  });
  (0, _todoList.initTodoListHandlers)();
});

function onStorageChange(event) {
  if (event.key === 'tasksList') (0, _renderer.renderTasks)();
}

window.addEventListener('storage', onStorageChange); // 1. Get data from server
// 2. Save data to front-end storage