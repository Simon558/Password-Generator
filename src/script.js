const sliderRange = document.getElementById('slider-range');
const sliderValue = document.getElementById('slider-value');

//Change slider length value using mouse & keyboard
sliderRange.addEventListener('mousemove', changeValue);
sliderRange.addEventListener('keydown', changeValue);

function changeValue() {
    sliderValue.innerHTML = sliderRange.value;
}
