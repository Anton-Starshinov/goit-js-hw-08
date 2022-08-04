import '../css/common.css';
import '../css/03-feedback.css';
import throttle from 'lodash.throttle';

const STORAGE_MAIL_KEY = 'feedback-form-state';
pickUpFrom();
const fromData = {};

const refs = {
  form: document.querySelector('.feedback-form'),
  input: document.querySelector('.feedback-form input'),
  textarea: document.querySelector('.feedback-form textarea'),
};

refs.form.addEventListener('input', e => {
  fromData[e.target.name] = e.target.value;

  localStorage.setItem(STORAGE_MAIL_KEY, JSON.stringify(fromData));
});

refs.form.addEventListener('submit', onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();

  e.currentTarget.reset();
}

function pickUpFrom() {
  const textStorage = JSON.parse(localStorage.getItem(STORAGE_MAIL_KEY));

  if (textStorage) {
    refs.input.value = textStorage.email;
    refs.textarea.value = textStorage.message;
  }
}
