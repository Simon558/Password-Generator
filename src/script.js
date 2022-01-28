const sliderRange = document.getElementById('slider-range');
const sliderValueDisplay = document.getElementById('slider-value');

//Change slider length value using mouse & keyboard
sliderRange.addEventListener('mousemove', changeValue);
sliderRange.addEventListener('keydown', changeValue);

let sliderValue = 16;

function changeValue() {
    sliderValue = sliderRange.value;
    sliderValueDisplay.innerHTML = sliderValue;
    return sliderValue;
}

changeValue();

const passwordInput = document.getElementById('password-input');
const btnCopy = document.getElementById('btn-copy');

//Coping password to clipboard after click copy button
btnCopy.addEventListener('click', copyPassword);

function copyPassword() {
    let copiedPassword = passwordInput.value;

    passwordInput.select();
    navigator.clipboard.writeText(copiedPassword);

    btnCopy.innerHTML = 'Copied';
}

const btnGenerate = document.getElementById('btn-generate');

//Generate lowercase letter
function generateLower() {
    const lowerCase = 'qwertyuiopasdfghjklzxcvbnm';
    return lowerCase.charAt(Math.floor(Math.random() * lowerCase.length));
}

//Generate uppercase letter
function generateUpper() {
    const upperCase = 'QWERTYUIOPASDFGHJKLZXCVBNM';
    return upperCase.charAt(Math.floor(Math.random() * upperCase.length));
}

//Generate digit
function generateDigits() {
    const digits = '1234567890';
    return Math.floor(Math.random() * digits.length);
}

//Generate symbol
function generateSymbols() {
    const symbols = '!@#$%^&*()';
    return symbols.charAt(Math.floor(Math.random() * symbols.length));
}

//Generate password after click geenerate button
btnGenerate.addEventListener('click', generatePassword);

const checkboxLowercase = document.getElementById('checkbox-lowercase');
const checkboxUppercase = document.getElementById('checkbox-uppercase');
const checkboxDigits = document.getElementById('checkbox-digits');
const checkboxSymbols = document.getElementById('checkbox-symbols');

function generatePassword() {
    btnCopy.innerHTML = 'Copy';

    let generatedCharacters = '';

    function validate() {
        for (let i = 0; i < sliderValue; i++) {
            checkboxLowercase.checked
                ? (generatedCharacters += generateLower())
                : 0;

            checkboxUppercase.checked
                ? (generatedCharacters += generateUpper())
                : 0;

            checkboxDigits.checked
                ? (generatedCharacters += generateDigits())
                : 0;

            checkboxSymbols.checked
                ? (generatedCharacters += generateSymbols())
                : 0;
        }
    }

    validate();

    function moveCharacters() {
        return generatedCharacters.charAt(
            Math.floor(Math.random() * generatedCharacters.length)
        );
    }

    function getRandomPassword() {
        let password = '';

        for (let i = 0; i < sliderValue; i++) {
            password += moveCharacters();
        }

        passwordInput.value = password;
    }

    getRandomPassword();
}
