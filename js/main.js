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
// const inputWindow = document.querySelector('.todo__input');
// const testListGet = document.getElementsByClassName('todo__list')[0];
// const listContainer = document.querySelector('.todo__list');
// const btnAdd = document.querySelector('.todo__btn');

// btnAdd.addEventListener('click', function () {
//   const inputTitle = inputWindow.value;
//   console.log(inputTitle);

//   if (!inputTitle) {
//     alert('No value !');
//   } else {
//     //create list element (li)
//     let listElement = document.createElement('li');
//     listElement.classList.add('todo__item');
//     listElement.innerHTML = inputWindow.value;
//     listContainer.appendChild(listElement);

//     //create span (x)
//     let spanElement = document.createElement('span');
//     spanElement.classList.add('todo__span');
//     spanElement.innerHTML = '\u00D7';
//     listElement.appendChild(spanElement);

//     //add line-through when clicked on list element, task completed
//     listElement.addEventListener('click', function () {
//       this.classList.add('todo__item-checked');
//     });

//     //remove list element when clicken on (x)
//     spanElement.addEventListener('click', () => {
//       listElement.remove();
//     });
//   }
//   inputWindow.value = '';
//   inputWindow.blur();
// });

//------------ weather
//elements
const weatherInput = document.querySelector('.weather__input');
const searchBtn = document.querySelector('.weather__search');
const weatherBox = document.querySelector('.weather__info');
const cityName = document.querySelector('.weather__city');
const weatherTemp = document.querySelector('.weather__temp');
const weatherIcon = document.querySelector('.weather__img');
const humidity = document.querySelector('.weather-box__text-humidity');
const windSpeed = document.querySelector('.weather-box__text-speed');
const weatherDescr = document.querySelector('.weather__description');

searchBtn.addEventListener('submit', async function (e) {
  e.preventDefault();
  const cityWord = weatherInput.value;

  // weatherTemp.innerHTML =
  //   '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><rect fill="#FF156D" stroke="#FF156D" stroke-width="15" stroke-linejoin="round" width="30" height="30" x="85" y="85" rx="0" ry="0"><animate attributeName="rx" calcMode="spline" dur="2" values="15;15;5;15;15" keySplines=".5 0 .5 1;.8 0 1 .2;0 .8 .2 1;.5 0 .5 1" repeatCount="indefinite"></animate><animate attributeName="ry" calcMode="spline" dur="2" values="15;15;10;15;15" keySplines=".5 0 .5 1;.8 0 1 .2;0 .8 .2 1;.5 0 .5 1" repeatCount="indefinite"></animate><animate attributeName="height" calcMode="spline" dur="2" values="30;30;1;30;30" keySplines=".5 0 .5 1;.8 0 1 .2;0 .8 .2 1;.5 0 .5 1" repeatCount="indefinite"></animate><animate attributeName="y" calcMode="spline" dur="2" values="40;170;40;" keySplines=".6 0 1 .4;0 .8 .2 1" repeatCount="indefinite"></animate></rect></svg>';

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityWord}&appid=92a401eff7587471474484237dddd06f&units=metric`
  )
    .then(resp => resp.json())
    .then(data => {
      console.log(data);

      weatherTemp.innerHTML = `${Math.ceil(data.main.temp)}°C`;
      cityName.innerHTML = data.name;
      weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
      humidity.innerHTML = `${data.main.humidity}%`;
      windSpeed.innerHTML = `${data.wind.speed}km/h`;
      weatherDescr.innerHTML = data.weather[0].description;
      weatherBox.style.opacity = '100';
    });

  // let randomTemp = Math.trunc(Math.random() * (32 - -20 + 1)) + -20;
  // let withSnow = Math.trunc(Math.random() * 6) + 1;
  // let sansSnow = Math.trunc(Math.random() * (6 - 2 + 1)) + 2;

  // cityName.innerHTML = weatherInput.value;

  // if (randomTemp <= 0)  {
  //   weatherIcon.src = `img/weather-${withSnow}.png`;
  // } else {
  //   weatherIcon.src = `img/weather-${sansSnow}.png`;
  // }

  // randomTemp <= 0
  // ? (weatherIcon.src = `img/weather-${withSnow}.png`)
  // : (weatherIcon.src = `img/weather-${sansSnow}.png`);

  // weatherIcon.src = `img/weather-${randomTemp <= 0 ? withSnow : sansSnow}.png`;

  weatherInput.value = '';
  weatherInput.blur();
});

//------------ password
//elements
const passwordInput = document.querySelector('.password__input');
const generateBtn = document.querySelector('.password__generate');
const settings = document.querySelectorAll('.password-settings__input');
const copyBtn = document.querySelector('.password__btn-copy');
const lengthInput = document.querySelector('.password-length__input');
const lengthValue = document.querySelector('.password-length__span');
const passwordIndicator = document.querySelector('.password__indicator');
const copyPassword = document.querySelector('.password__btn-copy');
const copyIcon = document.querySelector('.password__copy-icon');

//name the same as id in input
const characters = {
  lowercaseLetters: 'abcdefghijklmnopqrstuvwxyz',
  uppercaseLetters: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  numbers: '0123456789',
  specialSymbols: '!@#$%^&*()-_+=<>?',
};

//generate random password
generateBtn.addEventListener('click', function () {
  let staticPassword = '';
  let randomPassword = '';
  let passLength = lengthInput.value;

  //looping through each settings checkbox
  settings.forEach(setting => {
    if (setting.checked) {
      //adding particular key velue from characters object to staticPassword
      staticPassword += characters[setting.id];
    }
  });

  for (let i = 0; i < passLength; i++) {
    randomPassword +=
      staticPassword[Math.floor(Math.random() * staticPassword.length)];
  }
  console.log(randomPassword);
  passwordInput.value = randomPassword;

  //update indicator
  const updateIndicator = () => {
    if (lengthInput.value <= 5) {
      passwordIndicator.id = 'weak';
    } else if (lengthInput.value <= 12) {
      passwordIndicator.id = 'medium';
    } else {
      passwordIndicator.id = 'strong';
    }
  };
  updateIndicator();
});

//update length value
lengthInput.addEventListener('input', () => {
  console.log(lengthInput.value);
  lengthValue.textContent = lengthInput.value;
});

//copy password
copyPassword.addEventListener('click', function () {
  navigator.clipboard.writeText(passwordInput.value); //copying
  copyIcon.src = `img/done.png`;
  setTimeout(() => {
    copyIcon.src = 'img/copy.png';
  }, 1500);
});

// // --------------------------- test world
// const worldBtn = document.querySelector('.world__btn');
// const worldName = document.querySelector('.world__title-name');

// worldBtn.addEventListener('click', function () {
//   const yourName = prompt('Please write your name:');
//   console.log(yourName);
//   worldName.textContent = yourName;
//   console.log('cl');
// });

// ------------ background
//elements
const backgroundBtn = document.querySelector('.background__btn');
const colorName = document.querySelector('.background__color-span');
const backgroundColor = document.querySelector('.background__color');

const backgroundRgb = document.querySelector('.background__color-rgb');
const colorNameRgb = document.querySelector('.background__color-span--rgb');

const hexValues = [
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  'A',
  'B',
  'C',
  'D',
  'F',
];

//create one random element
function getRandomHexValue() {
  //random number
  const randomIndexPosition = Math.floor(Math.random() * hexValues.length);
  //random hex value
  const randomHexValue = hexValues[randomIndexPosition];
  return randomHexValue;
}

//create random string
function getRandomHexString(stringLength) {
  let hexString = '';
  for (let i = 0; i < stringLength; i++) {
    hexString += getRandomHexValue();
  }
  return hexString;
}

backgroundBtn.addEventListener('click', () => {
  const randomHexString = '#' + getRandomHexString(6);
  colorName.textContent = randomHexString;
  backgroundColor.style.backgroundColor = randomHexString;
  console.log(randomHexString);

  backgroundRgb.style.backgroundColor = randomRgbColor(0, 255);
  console.log(randomRgbColor());
  //colorNameRgb.textContent = randomRgbColor();
});

const randomRgb = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);
const randomRgbColor = () =>
  `rgb(${randomRgb(0, 255)}, ${randomRgb(0, 255)}, ${randomRgb(0, 255)})`;

// ---------------- test counter
// const counterValueElement = document.querySelector('.counter__value');
// const btnPlusElement = document.querySelector('.counter__plus');
// const btnMinusElement = document.querySelector('.counter__minus');
// const counterBackground = document.querySelector('.counter-section');

// let counterValue = 0;
// const counterLimit = 20;

// const counterUpdateDisplay = () => {
//   if (counterValue > counterLimit) {
//     counterValue = 20;
//   } else if (counterValue < 0) {
//     counterValue = 0;
//   }

//   counterValueElement.textContent = counterValue;
//   counterBackground.style.setProperty(
//     'background-color',
//     `rgb(${(counterValue / counterLimit) * 255}, 64, 0)`
//   );
// };

// btnPlusElement.addEventListener('click', () => {
//   counterValue += 1;
//   counterUpdateDisplay();
// });

// btnMinusElement.addEventListener('click', () => {
//   counterValue -= 1;
//   counterUpdateDisplay();
// });
// counterUpdateDisplay();

// ----------- tabbed
const tabbedList = document.querySelector('.tabbed__list');
const tabbedLinks = document.querySelectorAll('.tabbed__list-link');
const tabbedContentElements = document.querySelectorAll('.tabbed__content');

const removeActiveLinks = () => {
  tabbedLinks.forEach(link => link.parentElement.classList.remove('active'));
};

const hideSections = () => {
  tabbedContentElements.forEach(section => section.classList.add('hidden'));
};

tabbedLinks.forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    removeActiveLinks();
    hideSections();
    link.parentElement.classList.add('active');
    const tabbedContentElement = document.querySelector(link.hash);
    tabbedContentElement.classList.remove('hidden');
  });
});

// ------------ testimonials
testimonials = [
  {
    author: {
      name: 'Gabriel Moore',
      image: 'author-01.jpg',
    },
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum consectetur, deserunt cupiditate architecto deleniti ipsum eos atque dolores maiores dignissimos esse sed exercitationem tempora, quis, blanditiis voluptate? Voluptatibus, optio totam.',
    date: '23rd May',
  },
  {
    author: {
      name: 'Billy Bailey',
      image: 'author-02.jpg',
    },
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum consectetur, deserunt cupiditate architecto deleniti ipsum eos atque dolores maiores dignissimos esse sed exercitationem tempora, quis, blanditiis voluptate? Voluptatibus, optio totam.',
    date: '25rd May',
  },
  {
    author: {
      name: 'Jackie Oliver',
      image: 'author-03.jpg',
    },
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum consectetur, deserunt cupiditate architecto deleniti ipsum eos atque dolores maiores dignissimos esse sed exercitationem tempora, quis, blanditiis voluptate? Voluptatibus, optio totam.',
    date: '2nd June',
  },
  {
    author: {
      name: 'Pauline Carter',
      image: 'author-04.jpg',
    },
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum consectetur, deserunt cupiditate architecto deleniti ipsum eos atque dolores maiores dignissimos esse sed exercitationem tempora, quis, blanditiis voluptate? Voluptatibus, optio totam.',
    date: '9th June',
  },
];

const containerElement = document.getElementById('testimonials-container');

const makeTestimonialCard = testimonial => {
  return `<div class="testimonials__card">
  <img src="img/${testimonial.author.image}" alt="author">
  <h2>${testimonial.author.name}</h2>
  <p>${testimonial.text}</p>
  <date>Written on ${testimonial.date}</date>
  </div>`;
};

let currentTestimonial = 0;

const nextTestimonial = () => {
  if (currentTestimonial < testimonials.length - 1) {
    currentTestimonial += 1;
    updatePage();
  }
};

const prevTestimonial = () => {
  if (currentTestimonial > 0) {
    currentTestimonial -= 1;
    updatePage();
  }
};

const updatePage = () => {
  let markup = makeTestimonialCard(testimonials[currentTestimonial]);

  if (testimonials.length > 1) {
    markup += `<div class='testimonials__buttons'>
    <button onclick='prevTestimonial()'>←</button>
    <button onclick='nextTestimonial()'>→</button></div>`;
  }

  containerElement.innerHTML = markup;
};

updatePage();

// ------------- timer
const hoursInputElement = document.getElementById('hoursInput');
const minutesInputElement = document.getElementById('minutesInput');
const secondsInputElement = document.getElementById('secondsInput');

const hoursOutputElement = document.getElementById('hoursOutput');
const minutesOutputElement = document.getElementById('minutesOutput');
const secondsOutputElement = document.getElementById('secondsOutput');

const btnTimer = document.getElementById('startTimer');

let targetTime;
let timerInterval;

const updateTimer = () => {
  if (targetTime) {
    const differenceInSeconds = Math.floor((targetTime - Date.now()) / 1000);
    if (differenceInSeconds < 1) {
      clearInterval(timerInterval);
    }
    const hours = Math.floor(differenceInSeconds / 3600);
    const minutes = Math.floor(differenceInSeconds / 60) % 60;
    const seconds = Math.floor(differenceInSeconds % 60);

    hoursOutputElement.textContent = `${hours} hours`;
    minutesOutputElement.textContent = `${minutes} minutes`;
    secondsOutputElement.textContent = `${seconds} seconds`;
  }
};

btnTimer.addEventListener('click', () => {
  const fututeHours = parseInt(hoursInputElement.value);
  const futureMinutes = parseInt(minutesInputElement.value);
  const futureSeconds = parseInt(secondsInputElement.value);

  const date = new Date();
  const currentHours = date.getHours();
  const currenMinutes = date.getMinutes();
  const currentSeconds = date.getSeconds();

  date.setHours(currentHours + fututeHours);
  date.setMinutes(currenMinutes + futureMinutes);
  date.setSeconds(currentSeconds + futureSeconds);

  targetTime = date.getTime();
  localStorage.setItem('targetTime', targetTime);
  updateTimer();
  timerInterval = setInterval(updateTimer, 500);
});

const storedTargetTime = localStorage.getItem('targetTime');
if (storedTargetTime) {
  targetTime = storedTargetTime;
  updateTimer();
  timerInterval = setInterval(updateTimer, 500);
}
updateTimer();

// ------------- shopping
const shoppingInput = document.querySelector('.shopping__input');
const shoppingAddBtn = document.querySelector('.shopping__btn');
const shoppingContainer = document.querySelector('.shopping__container');
const shoppingList = document.querySelector('.shopping__list');

shoppingContainer.addEventListener('submit', function (e) {
  e.preventDefault();
  const shoppingItem = shoppingInput.value;

  if (!shoppingItem) {
    shoppingItem.textContent = '';
  } else {
    const shoppingElement = document.createElement('li');
    shoppingElement.classList.add('shopping__list-element');
    shoppingElement.innerHTML = shoppingItem;
    shoppingList.appendChild(shoppingElement);

    const shoppingDeleteElement = document.createElement('span');
    shoppingDeleteElement.classList.add('shopping__list-span');
    shoppingDeleteElement.innerHTML = '\u00D7';
    shoppingElement.appendChild(shoppingDeleteElement);

    shoppingDeleteElement.addEventListener('click', () => {
      shoppingElement.remove();
    });
  }

  shoppingInput.value = '';
  shoppingInput.blur();
});

// -------- calculator
const calculatorButtons = document.querySelectorAll('.calculator__button ');
const calculatorInput = document.getElementById('result');

for (let i = 0; i < calculatorButtons.length; i++) {
  calculatorButtons[i].addEventListener('click', () => {
    const calculatorButtonValue = calculatorButtons[i].textContent;

    if (calculatorButtonValue === 'C') {
      clearResult();
    } else if (calculatorButtonValue === '=') {
      calculateResult();
    } else {
      appendValue(calculatorButtonValue);
    }
  });
}

function clearResult() {
  calculatorInput.value = '';
}

function calculateResult() {
  calculatorInput.value = eval(calculatorInput.value);
}

function appendValue(calculatorButtonValue) {
  calculatorInput.value += calculatorButtonValue;
}

// -------------- pomodoro
const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');
const resetBtn = document.getElementById('reset');
const pomodoroTimer = document.getElementById('timer');

let interval;
let timeLeft = 1500;

function updatePomodoroTimer() {
  let pomodoroMinutes = Math.floor(timeLeft / 60);
  let pomodoroSeconds = timeLeft % 60;

  let formattedTime = `${pomodoroMinutes
    .toString()
    .padStart(2, '0')}:${pomodoroSeconds.toString().padStart(2, '0')}`;

  pomodoroTimer.innerHTML = formattedTime;
}

function startTimer() {
  interval = setInterval(() => {
    timeLeft--;
    updatePomodoroTimer();
    if (timeLeft === 0) {
      clearInterval(interval);
      pomodoroTimer.innerHTML = 'Good Job';
      timeLeft = 1500;
      updatePomodoroTimer();
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(interval);
}
function resetTimer() {
  clearInterval(interval);
  timeLeft = 1500;
  updatePomodoroTimer();
}

startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
resetBtn.addEventListener('click', resetTimer);
