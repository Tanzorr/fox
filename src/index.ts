import {
  validateInputs,
  validateInput,
  isEqualPasswords,
  cleanInputs
} from './functions.js';

const form = document.querySelector<HTMLFormElement>('#form');

const create = form.querySelector('#create');
const password1 = document.querySelector<HTMLInputElement>('#password-1');
const password2 = document.querySelector<HTMLInputElement>('#password-2');

const inputs = form.querySelectorAll('input');

inputs.forEach((input) => {
  input.addEventListener('input', () => {
    input.classList.remove('invalid');
    const inputParent = input.parentElement;

    const errorContainer = inputParent.querySelector('.error-container');
    if (errorContainer) {
      inputParent.removeChild(errorContainer);
    }
  });

  if (input.getAttribute('data-name')) {
    input.addEventListener('blur', () => {
      validateInput(input);
    });
  }
});

create.addEventListener('click', (e) => {
  e.preventDefault();
  validateInputs(inputs);

  if (isEqualPasswords(password1, password2) && validateInputs(inputs)) {
    cleanInputs(inputs);
  }
});
