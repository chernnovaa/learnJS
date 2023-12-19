// У вас є масив об’єктів user, і в кожному з них є user.name. Напишіть код, який перетворює їх в масив імен.

// Наприклад:

// let ivan = { name: 'Іван', age: 25 };
// let petro = { name: 'Петро', age: 30 };
// let mariya = { name: 'Марія', age: 28 };

// let users = [ivan, petro, mariya];

// let names = users.map(item => item.name);
// /* ... ваш код */

// console.log(users);
// //alert(names); // Іван, Петро, Марія

//---------- todo
//elements
const inputWindow = document.querySelector('.todo__input');
const testListGet = document.getElementsByClassName('todo__list')[0];
const listContainer = document.querySelector('.todo__list');
const btnAdd = document.querySelector('.todo__btn');

btnAdd.addEventListener('click', function () {
  const inputTitle = inputWindow.value;
  console.log(inputTitle);

  if (!inputTitle) {
    alert('No value !');
  } else {
    //create list element (li)
    let listElement = document.createElement('li');
    listElement.classList.add('todo__item');
    listElement.innerHTML = inputWindow.value;
    listContainer.appendChild(listElement);

    //create span (x)
    let spanElement = document.createElement('span');
    spanElement.classList.add('todo__span');
    spanElement.innerHTML = '\u00D7';
    listElement.appendChild(spanElement);

    //add line-through when clicked on list element, task completed
    listElement.addEventListener('click', function () {
      this.classList.add('todo__item-checked');
    });

    //remove list element when clicken on (x)
    spanElement.addEventListener('click', () => {
      listElement.remove();
    });
  }
  inputWindow.value = '';
  inputWindow.blur();
});

const lalal = () => {};

function lalala() {}

//------------ weather
//elements
const weatherInput = document.querySelector('.weather__input');
const searchBtn = document.querySelector('.weather__btn');
const cityName = document.querySelector('.weather__city');

searchBtn.addEventListener('click', function () {
  const cityWord = weatherInput.value;
  console.log(cityWord);
});
