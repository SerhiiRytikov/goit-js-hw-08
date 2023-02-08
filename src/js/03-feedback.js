import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const email = document.querySelector('input');
const textArea = document.querySelector('textarea');

const LOCALSTORAGE_KEY = 'feedback-form-state';

const formData = {};

form.addEventListener('submit', handleFormSubmit);
form.addEventListener('input', throttle(handleFormTextareaInput, 500));

messageTextareaInput();

function handleFormSubmit(event) {
  event.preventDefault();

  event.currentTarget.reset();
  localStorage.removeItem(LOCALSTORAGE_KEY);
}

function handleFormTextareaInput(event) {
  formData[event.target.name] = event.target.value;
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
}

function messageTextareaInput() {
  const savedMessage = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
  if (savedMessage) {
    email.value = savedMessage.email;
    textArea.value = savedMessage.message;
    console.log(savedMessage);
  }
}
