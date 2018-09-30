import constants from '../constants';

const slider = document.getElementById('myRange');
console.log(slider.value);

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  console.log(slider.value);
};
