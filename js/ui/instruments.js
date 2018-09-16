import channels from './channels.js';
import constants from '../constants.js';

const instruments = {
  createInstrument: (rootDiv, instrument, pitchArray, barNumber, beatsInBar,
    subdivision, delay) => {

    constants.instrumentSettings[instrument].delay = delay;

    const channelContainer = document.createElement('div');
    channelContainer.classList.add('channel-container');
    channelContainer.classList.add(`${instrument}-container`);
    rootDiv.appendChild(channelContainer);

    pitchArray.forEach(pitch => {
      let isWhiteNote = true;
      if (pitch.length > 2) {
        isWhiteNote = false;
      }

      channels.createChannel(
        rootDiv,
        channelContainer,
        instrument,
        pitch,
        barNumber,
        beatsInBar,
        subdivision,
        isWhiteNote,
      );
    });
  }
};

export default instruments;
