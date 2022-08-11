import { renderTasks } from './renderer';
import { getItem, setItem } from './storage';
import { updateTask, getTasksList } from './tasksGateway';

function onToggleTask(event) {
  const isCheckbox = event.target.classList.contains('list-item__checkbox');
  if (!isCheckbox) return;

  const taskId = event.target.dataset.id;
  const done = event.target.checked;
  const tasksList = getItem('tasksList');
  const { text, createDate } = tasksList.find((task) => task.id === taskId);

  const updatedTask = {
    text,
    createDate,
    done,
    finishDate: done ? new Date().toISOString() : null,
  };

  updateTask(taskId, updatedTask)
    .then(() => getTasksList())
    .then((newTasksList) => {
      setItem('tasksList', newTasksList);
      renderTasks();
    });
}

export { onToggleTask };

// 1. Prepare data
// 2. Update data in db (Data Base)
// 3. Read new data from server
// 4. Save new data to front-end storage
// 5. Update UI based on new data
