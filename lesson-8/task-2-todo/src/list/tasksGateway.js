const baseUrl = 'https://62e9354b01787ec712138da8.mockapi.io/api/v1/todo';

function getTasksList() {
  return fetch(baseUrl).then(response => response.json());
}

function creatTask(taskData) {
  return fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(taskData),
  });
}

function updateTask(taskId, updatedTaskData) {
  return fetch(`${baseUrl}/${taskId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(updatedTaskData),
  });
}

function deleteTask(taskId) {
  return fetch(`${baseUrl}/${taskId}`, {
    method: 'DELETE',
  });
}

export { getTasksList, creatTask, updateTask, deleteTask };
