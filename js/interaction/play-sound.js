import musicData from './music-data.js';
import constants from '../constants.js';

export default (barNumber, beatsInBar, subdivision) => {
  const totalLength = barNumber * beatsInBar * subdivision;
  let counter = 0;
  setInterval(() => {
    Object.keys(musicData).forEach((key) => {
      const currentInstrument = key.split('-')[0];
      if (musicData[key][counter + 1]) {
        const audioElement = document.getElementsByClassName(`${key}-audio`)[0];
        audioElement.setAttribute(
          'src',
          `assets/sounds/${currentInstrument}/${key}.mp3`
        );
        audioElement.play();

        if (constants.instrumentSettings[currentInstrument].delay) {
          const delay1AudioElement = document.getElementsByClassName(`${key}-delay-1-audio`)[0];
          delay1AudioElement.volume = 0.5;
          delay1AudioElement.setAttribute(
            'src',
            `assets/sounds/${currentInstrument}/${key}.mp3`
          );

          setTimeout(() => {
            delay1AudioElement.play();
          }, 200);

          const delay2AudioElement = document.getElementsByClassName(`${key}-delay-2-audio`)[0];
          delay2AudioElement.volume = 0.2;
          delay2AudioElement.setAttribute(
            'src',
            `assets/sounds/${currentInstrument}/${key}.mp3`
          );

          setTimeout(() => {
            delay2AudioElement.play();
          }, 400);
        }
      }
    });

    if (counter === totalLength - 1) {
      counter = 0;
    } else {
      counter++;
    }
  }, 200);
};
