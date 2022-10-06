// import _, { forEach } from 'lodash';
import './style.css';
import * as stat from './modules/crud.js';
import * as task from './modules/array.js';

let list = [];

const listContainer = document.querySelector('ul');

const addList = () => {
  if (window.localStorage.getItem('localTasks')) {
    const localTasks = window.localStorage.getItem('localTasks');
    list = JSON.parse(localTasks);
  }
  document.querySelector('.list').innerHTML = '';
  list.forEach((item) => {
    const taskElement = document.createElement('li');
    taskElement.classList.add('task');
    if (item.isCompleted) {
      taskElement.classList.add('completed');
    }
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.classList.add('task-check');
    checkbox.addEventListener('click', () => {
      stat.status(item, list);
      addList();
    });
    checkbox.checked = item.isCompleted;
    taskElement.appendChild(checkbox);
    const taskText = document.createElement('input');
    taskText.classList = 'task-text';
    taskText.value = item.description;
    taskText.addEventListener('change', () => {
      if (taskText.value.length > 0) {
        item.description = taskText.value;
        stat.saveLocal(list);
      }
    });
    taskElement.appendChild(taskText);
    const dragIcon = document.createElement('button');
    dragIcon.classList = 'far fa-trash-alt deleteBtn';
    taskElement.appendChild(dragIcon);
    taskElement.draggable = 'true';
    document.querySelector('.list').appendChild(taskElement);
  });
};

function removeItem(e) {
  if (!e.target.classList.contains('deleteBtn')) {
    return;
  }
  const btn = e.target;
  list.forEach((task) => {
    if (task.description === btn.parentElement.children[1].value) {
      list.splice(list.indexOf(task), 1);
    }
  });
  btn.closest('li').remove();
  task.updateIndex(list);
  stat.saveLocal(list);
}

listContainer.addEventListener('click', removeItem);
addList();
document.querySelector('#task-form').addEventListener('submit', (event) => {
  event.preventDefault();
  task.add(list);
  addList();
});
document.querySelector('.clear').addEventListener('click', () => {
  task.removeDone(list);
  addList();
});
