import musicData from './music-data.js';
import constants from '../constants.js';

export default (barNumber, beatsInBar, subdivision) => {
  const totalLength = barNumber * beatsInBar * subdivision;
  let counter = 0;

  let currentTempo = constants.tempo;

  const restartPlaySoundsInterval = () => {
    clearInterval(playSoundsInterval);
    playSoundsInterval = setInterval(playSoundsFunction, currentTempo);
  };

  const playSoundsFunction = () => {
    Object.keys(musicData).forEach((key) => {
      const currentInstrument = key.split('-')[0];
      const currentPitch = key.split('-')[1];
      const allNoteElementsInTrack = [];

      if (musicData[key][counter + 1]) {
        const audioElement = document.getElementsByClassName(
          `${key}-audio`
        )[0];
        audioElement.setAttribute(
          'src',
          `assets/sounds/${currentInstrument}/${key}.mp3`
        );
        const currentTrack = document.getElementsByClassName(
          `${currentInstrument} ${currentPitch}`
        )[0];
        [...currentTrack.childNodes].forEach(bar => {
          if ([...bar.classList].includes('bar')) {
            allNoteElementsInTrack.push(...bar.childNodes);
          }
        });
        const currentCounter = counter;
        allNoteElementsInTrack[counter].classList.add('active-animation');
        setTimeout(() => {
          allNoteElementsInTrack[currentCounter].classList.remove('active-animation');
        }, 1100);
        audioElement.play();

        if (constants.instrumentSettings[currentInstrument].delay) {
          const delayFactor = constants.instrumentSettings[currentInstrument].delay;
          for (let i = 1; i <= delayFactor; i++) {
            const delayAudioElement = document.getElementsByClassName(
              `${key}-delay-${i}-audio`
            )[0];
            delayAudioElement.volume = Math.pow(0.5, i);
            delayAudioElement.setAttribute(
              'src',
              `assets/sounds/${currentInstrument}/${key}.mp3`
            );

            setTimeout(() => {
              delayAudioElement.play();
            }, constants.tempo * i);
          }
        }
      }
    });

    if (counter === totalLength - 1) {
      counter = 0;
    } else {
      counter++;
    }

    if (currentTempo !== constants.tempo) {
      currentTempo = constants.tempo;
      restartPlaySoundsInterval();
    }
  };

  let playSoundsInterval = setInterval(playSoundsFunction, currentTempo);
};
