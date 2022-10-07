import './style.css';
import * as task from './modules/crud.js';

const listContainer = document.querySelector('ul');

let list = [
  { description: 'Set up a new project with webpack', isCompleted: false, index: 0 },
  { description: 'Set up a', isCompleted: false, index: 1 },
  { description: 'Create an index.js file', isCompleted: false, index: 2 },
  { description: 'Write a function to iterate over the tasks array and populate an HTML', isCompleted: false, index: 3 },
];

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
      task.status(item, list);
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
        task.saveLocal(list);
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
  task.saveLocal(list);
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
