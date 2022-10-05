// import _, { forEach } from 'lodash';
import './style.css';

const dSet = [
  {
    desc: 'Wash dishes',
    completed: false,
    index: '0',
  },
  {
    desc: 'Attend Evening service for church prayer meeting',
    completed: false,
    index: '1',
  },
  {
    desc: 'Attend community development meeting',
    completed: false,
    index: '2',
  },
  {
    desc: 'Attend Morning Session',
    completed: false,
    index: '3',
  },
];

function component() {
  const element = document.createElement('li');
  // Lodash, now imported by this script
  dSet.forEach((d, index) => {
    if (d.index == index) {
      element.innerHTML += `
      <div class='li-item'>
        <div>
          <input type="checkbox">
          <label for="text">${d.desc}</label>
        </div>
        <div><i class="fa fa-ellipsis-v" aria-hidden="true"></i></div>
      </div>
      <hr>
      `;
    }
  });
  element.classList.add('item');
  return element;
}
document.querySelector('.list').appendChild(component());