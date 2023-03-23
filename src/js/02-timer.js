import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const date = document.querySelector('#datetime-picker');
const btn = document.querySelector('[data-start]');
const [day, hour, min, sec] = document.querySelectorAll('[data-days], [data-hours], [data-minutes], [data-seconds]');
const spans = document.querySelectorAll('.value');

const convertMs = ms => {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
};

const addLeadingZero = value => `${value}`.padStart(2, '0');

const toggleEndClass = () => spans.forEach(item => item.classList.toggle('end'));

const disableBtn = () => {
  btn.disabled = true;
};

const disableDate = () => {
  date.disabled = true;
};

const enableDate = () => date.disabled = false;

const updateCountdown = () => {
  const chooseDate = new Date(date.value);
  const countInterval = chooseDate - Date.now();
  const { days, hours, minutes, seconds } = convertMs(countInterval);

  day.textContent = addLeadingZero(days);
  hour.textContent = addLeadingZero(hours);
  min.textContent = addLeadingZero(minutes);
  sec.textContent = addLeadingZero(seconds);

  if (countInterval < 1000) {
    toggleEndClass();
    enableDate();
  } else {
    requestAnimationFrame(updateCountdown);
  }
};

const handleBtnClick = () => {
  toggleEndClass();
  disableBtn();
  disableDate
  requestAnimationFrame(updateCountdown);
};

disableBtn();

flatpickr(date, {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] <= Date.now()) {
      Notiflix.Notify.failure('Please choose a date in the future!');
      disableBtn();
    } else {
      btn.disabled = false;
    }
  },
});

btn.addEventListener('click', handleBtnClick);