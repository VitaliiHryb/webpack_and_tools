import { renderTasks } from '../common/renderer.js';
import { createTask, getTasksList } from '../common/tasksGateway.js';

const createTaskBtnElem = document.querySelector('.create-task-btn');

const onCreateBtnClick = () => {
  getTasksList().then(tasks => {
    const newTaskElement = document.querySelector('.task-input');
    if (!newTaskElement.value) return;

    const id = tasks.length ? Math.max(...tasks.map(task => task.id)) + 1 : 1;
    const text = newTaskElement.value;
    createTask({ id, text, isDone: false })
      .then(getTasksList)
      .then(newTasksList => {
        renderTasks(newTasksList);
      });

    newTaskElement.value = '';
  });
};

createTaskBtnElem.addEventListener('click', onCreateBtnClick);
