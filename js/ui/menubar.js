import constants from '../constants.js';

export default () => {
  var slider = document.getElementById('myRange');

  // Update the current slider value (each time you drag the slider handle)
  slider.oninput = function() {
    constants.tempo = slider.value * 10;
  };
};
