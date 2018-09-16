import musicData from './music-data.js';

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
      }
    });

    if (counter === totalLength - 1) {
      counter = 0;
    } else {
      counter++;
    }
  }, 200);
};
