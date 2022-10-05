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
  {
    desc: 'Attend Morning Session',
    completed: false,
    index: '4',
  },
  {
    desc: 'Attend Morning Session',
    completed: false,
    index: '5',
  },
  {
    desc: 'Attend Morning Session',
    completed: false,
    index: '6',
  },
  {
    desc: 'Attend Morning Session',
    completed: false,
    index: '7',
  },
  {
    desc: 'Attend Morning Session',
    completed: false,
    index: '8',
  },
  {
    desc: 'Attend Morning Session',
    completed: false,
    index: '9',
  },
  {
    desc: 'Attend Morning Session',
    completed: false,
    index: '10',
  },
  {
    desc: 'Attend Morning Session',
    completed: false,
    index: '11',
  },
];

function component() {
  const element = document.createElement('li');
  // Lodash, now imported by this script
  dSet.forEach((d, index) => {
    // eslint-disable-next-line eqeqeq
    if (d.index == index) {
      element.innerHTML += `
      <div class='li-item'>
        <div>
          <input type="checkbox" class="checkbox">
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