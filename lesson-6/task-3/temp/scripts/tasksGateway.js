"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.creatTask = creatTask;
exports.deleteTask = deleteTask;
exports.getTasksList = getTasksList;
exports.updateTask = updateTask;
// const baseUrl = 'https://crudcrud.com/api/c28d6298d7984ed3ae29967a894d5dbf';
const baseUrl = 'https://crudcrud.com/api/dab3bb3acc8245358def6828b2b405b2/tasks';

function mapTasks(tasks) {
  return tasks.map(_ref => {
    let {
      _id,
      ...rest
    } = _ref;
    return { ...rest,
      id: _id
    };
  });
}

function getTasksList() {
  return fetch(baseUrl).then(response => response.json()).then(tasks => mapTasks(tasks));
}

function creatTask(taskData) {
  return fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(taskData)
  });
}

function updateTask(taskId, updatedTaskData) {
  return fetch(`${baseUrl}/${taskId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(updatedTaskData)
  });
}

function deleteTask(taskId) {
  return fetch(`${baseUrl}/${taskId}`, {
    method: 'DELETE'
  });
}