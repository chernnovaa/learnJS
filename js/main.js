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
