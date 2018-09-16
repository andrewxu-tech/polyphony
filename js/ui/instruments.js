import channels from './channels.js';

const instruments = {
  createInstrument: (rootDiv, instrument, pitchArray, barNumber, beatsInBar, subdivision) => {
    pitchArray.forEach(pitch => {
      let isWhiteNote = false;
      if (pitch.length > 2) {
        isWhiteNote = true;
      }
      channels.createChannel(
        rootDiv,
        instrument,
        pitch,
        barNumber,
        beatsInBar,
        subdivision,
        isWhiteNote
      );
    });
  }
};

export default instruments;
