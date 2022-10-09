/*


TODO

1. create account on IP geolocation API to get city and country 
2. create logic for greeting message depending on time of the day

- "Good morning" between 5am and 12pm
- "Good afternoon" between 12pm and 6pm
- "Good evening" between 6pm and 5am

3. create logic in js and css for displaying background image and icon depending on time of the day

- The sun icon and the daytime background image between 5am and 6pm
- The moon icon and the nighttime background image between 6pm and 5am



*/

// QUOTES

const btnQuote = document.querySelector('[data-load-quote]');
const quoteText = document.querySelector('[data-quote-text]');
const quoteAuthor = document.querySelector('[data-quote-author]');

// WORLD TIME

const clockTime = document.querySelector('[data-clock-time]');
const currentTime = document.querySelector('[data-combined-time]');
const timezone = document.querySelector('[data-timezone]');
const dayYear = document.querySelector('[data-day-year]');
const dayWeek = document.querySelector('[data-day-week]');
const weekNumber = document.querySelector('[data-week-number]');

// api urls

const quotesURL = 'https://programming-quotes-api.herokuapp.com/Quotes/random';
const dataURL = 'http://worldtimeapi.org/api/ip';

btnQuote.addEventListener('click', getRandomQuote);

async function getRandomQuote() {
  const response = await fetch(quotesURL, { cache: 'no-cache' });
  const data = await response.json();

  quoteText.textContent = data.en;
  quoteAuthor.textContent = data.author;
}

async function getData() {
  const response = await fetch(dataURL, { cache: 'no-cache' });
  const data = await response.json();

  const time = data.datetime;

  let hours = new Date(time).getHours();
  hours = hours <= 9 ? `0${hours}` : hours;
  const minutes = new Date(time).getMinutes();

  const combinedTime = `${hours}:${minutes}`;

  console.log(data);

  clockTime.textContent = data.abbreviation;
  currentTime.textContent = combinedTime;
  timezone.textContent = data.timezone;
  dayYear.textContent = data.day_of_year;
  dayWeek.textContent = data.day_of_week;
  weekNumber.textContent = data.week_number;
}

getRandomQuote();
getData();

const button = document.querySelector('#translate');
const extra = document.querySelector('.extra');

document.body.style.setProperty('--footer-height', `-${extra.offsetHeight}px`);

button.addEventListener('click', () => {
  document.querySelector('body').classList.toggle('slide');
});
