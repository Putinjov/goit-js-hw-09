function getRandomHexColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0);
}

function disableButton(button) {
  button.disabled = true;
}

function enableButton(button) {
  button.disabled = false;
}

const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');

let intervalId;

function startButtonHandler() {
  disableButton(startBtn);
  enableButton(stopBtn);
  intervalId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
}

function stopButtonHandler() {
  enableButton(startBtn);
  disableButton(stopBtn);
  clearInterval(intervalId);
}

startBtn.addEventListener('click', startButtonHandler);
stopBtn.addEventListener('click', stopButtonHandler);

disableButton(stopBtn);