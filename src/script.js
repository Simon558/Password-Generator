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

//Generate digits
function generateDigits() {
    const digits = '1234567890';
    return Math.floor(Math.random() * digits.length);
}

//Generate symbol
function generateSymbols() {
    const symbols = '!@#$%^&*()';
    return symbols.charAt(Math.floor(Math.random() * symbols.length));
}
