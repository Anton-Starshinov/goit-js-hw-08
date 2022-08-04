import '../css/common.css';
import '../css/03-feedback.css';
import throttle from 'lodash.throttle';

const STORAGE_MAIL_KEY = 'feedback-form-state';
const fromData = {};

const formEl = document.querySelector('.feedback-form');

formEl.addEventListener('input', throttle(onFormStorage, 500));
formEl.addEventListener('submit', onFormSubmit);
pickUpFrom();

function onFormStorage(e) {
  fromData[e.target.name] = e.target.value;

  localStorage.setItem(STORAGE_MAIL_KEY, JSON.stringify(fromData));
}

function onFormSubmit(e) {
  e.preventDefault();

  e.currentTarget.reset();
  localStorage.removeItem(STORAGE_MAIL_KEY);
}

function pickUpFrom() {
  const textStorage = JSON.parse(localStorage.getItem(STORAGE_MAIL_KEY));

  if (textStorage) {
    formEl.email.value = textStorage.email;
    formEl.message.value = textStorage.message;
  }
}
