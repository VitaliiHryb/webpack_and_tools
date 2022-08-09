import './common.scss';

import { updateTask, deleteTask, getTasksList } from './tasksGateway.js';

const listElem = document.querySelector('.list');

function createElement(elementType, class_, attrs, dataset) {
  const element = document.createElement(elementType);

  if (class_) element.classList.add(class_);

  if (attrs)
    Object.keys(attrs).forEach(attr => {
      element.setAttribute(attr, attrs[attr]);
    });

  if (dataset)
    Object.keys(dataset).forEach(dataKey => {
      element.dataset[dataKey] = dataset[dataKey];
    });

  return element;
}

const onCheckboxClick = ({ target }) => {
  getTasksList().then(tasks => {
    const taskId = target.closest('.list__item').dataset.taskId;
    const task = tasks.find(task => task.id === taskId);
    task.isDone = !task.isDone;

    updateTask(task)
      .then(getTasksList)
      .then(tasksList => {
        renderTasks(tasksList);
      });
  });
};

const onDeleteTask = ({ target }) => {
  const taskToDeleteId = target.closest('.list__item').dataset.taskId;

  deleteTask(taskToDeleteId)
    .then(getTasksList)
    .then(tasksList => {
      renderTasks(tasksList);
    });
};

export function renderTasks(tasksList) {
  tasksList = tasksList || [];
  listElem.innerHTML = '';

  const tasksElems = tasksList
    .sort((a, b) => a.isDone - b.isDone)
    .map(({ id, text, isDone }) => {
      const listItemElem = createElement('li', 'list__item', null, {
        taskId: id,
      });

      const checkboxElem = createElement('input', 'list__item-checkbox', {
        type: 'checkbox',
      });
      checkboxElem.checked = isDone;
      checkboxElem.addEventListener('click', onCheckboxClick);

      const deleteBtnElem = createElement('button', 'list__item-delete-btn');
      deleteBtnElem.addEventListener('click', onDeleteTask);

      const textElem = createElement('span', 'list__item-text');
      textElem.textContent = text;
      if (isDone) {
        listItemElem.classList.add('list__item_done');
        textElem.classList.add('list__item_cross-text');
      }

      listItemElem.append(checkboxElem, textElem, deleteBtnElem);
      return listItemElem;
    });

  listElem.append(...tasksElems);
}
