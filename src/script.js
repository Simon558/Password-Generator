const sliderRange = document.getElementById('slider-range');
const sliderValue = document.getElementById('slider-value');

//Change slider length value using mouse & keyboard
sliderRange.addEventListener('mousemove', changeValue);
sliderRange.addEventListener('keydown', changeValue);

function changeValue() {
    sliderValue.innerHTML = sliderRange.value;
}

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
