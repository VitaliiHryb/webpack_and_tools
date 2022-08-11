import { renderTasks } from './renderer';
import { setItem } from './storage';
import { getTasksList, creatTask } from './tasksGateway';

function onCreateTask() {
  const taskTitleInputElem = document.querySelector('.task-input');
  const text = taskTitleInputElem.value;

  if (!text) return;

  taskTitleInputElem.value = '';

  const newTask = {
    text,
    done: false,
    createDate: new Date().toISOString(),
  };

  creatTask(newTask)
    .then(() => getTasksList())
    .then((newTasksList) => {
      setItem('tasksList', newTasksList);
      renderTasks();
      // taskTitleInputElem.value = '';
    });
}

export { onCreateTask };

// 1. Prepare data
// 2. Write data to Data Base
// 3. Read new data from server
// 4. Save new data to front-end storage
// 5. Update UI based on new data
