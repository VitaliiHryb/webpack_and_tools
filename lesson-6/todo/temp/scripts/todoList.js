"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initTodoListHandlers = initTodoListHandlers;

var _createTask = require("./createTask.js");

var _updateTask = require("./updateTask.js");

var _deleteTask = require("./deleteTask.js");

function initTodoListHandlers() {
  const createBtnElem = document.querySelector('.create-task-btn');
  createBtnElem.addEventListener('click', _createTask.onCreateTask);
  const todoListElem = document.querySelector('.list');
  todoListElem.addEventListener('click', _updateTask.onToggleTask);
  todoListElem.addEventListener('click', _deleteTask.onDeleteTask);
}