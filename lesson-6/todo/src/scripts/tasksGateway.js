const apiUrl = 'https://6151a12d4a5f22001701d31f.mockapi.io';

export const getTasksList = () => {
  return fetch(apiUrl + '/tasks').then(response => response.json());
};

export const createTask = createdTask => {
  const fetchData = {
    method: 'POST',
    body: JSON.stringify(createdTask),
    headers: { 'Content-Type': 'application/json' },
  };

  return fetch(apiUrl + '/tasks', fetchData);
};

export const updateTask = updatedTask => {
  const fetchData = {
    method: 'PUT',
    body: JSON.stringify(updatedTask),
    headers: { 'Content-Type': 'application/json' },
  };

  return fetch(apiUrl + `/tasks/${updatedTask.id}`, fetchData);
};

export const deleteTask = taskToDeleteId => {
  const fetchData = {
    method: 'DELETE',
  };

  return fetch(apiUrl + `/tasks/${taskToDeleteId}`, fetchData);
};
