import { Validator } from './validator.js';
const validator = new Validator();
export const validationCollection = {
    name: {
        argument: /^[a-zA-Zа-яА-Я'-/\s]+$/,
        validationFunction: validator.isValidFormat,
        errorMessage: 'This field have to has at list one letter'
    },
    email: {
        argument: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
        validationFunction: validator.isValidFormat,
        errorMessage: 'Email Invalid'
    },
    password: {
        argument: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
        validationFunction: validator.isValidFormat,
        errorMessage: 'Password Invalid'
    },
    age: {
        validationFunction: validator.isValidAge,
        argument: 18,
        errorMessage: 'Age Invalid'
    }
};
export function addErrorMessage(input, errorMessage) {
    const inputParentElement = input.parentElement;
    const errorContainer = document.createElement('span');
    errorContainer.classList.add('error-container');
    errorContainer.innerText = errorMessage;
    if (!inputParentElement.querySelector('.error-container'))
        input.parentElement.appendChild(errorContainer);
}
export function validateInput(input) {
    input.classList.remove('invalid');
    let dataName = input.getAttribute('data-name');
    let validationItem = validationCollection[dataName];
    if (!validationItem?.validationFunction(input.value, validationItem.argument)) {
        input.classList.add('invalid');
        addErrorMessage(input, validationItem?.errorMessage);
        return false;
    }
    return true;
}
export function validateInputs(inputs) {
    let isValid = true;
    inputs.forEach((input) => {
        if (input.getAttribute('data-name')) {
            isValid = validateInput(input) ? isValid : false;
        }
    });
    return isValid;
}
export function cleanInputs(inputs) {
    inputs.forEach((input) => {
        input.value = '';
    });
}
export function isEqualPasswords(password1, password2) {
    if (!validator.isEqualPassword(password1.value, password2.value)) {
        addErrorMessage(password1, 'Password no math');
        addErrorMessage(password2, 'Password no math');
        password1.classList.add('invalid');
        password2.classList.add('invalid');
        return false;
    }
    return true;
}
