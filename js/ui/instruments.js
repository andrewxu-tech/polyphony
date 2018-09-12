import channels from './channels.js';

const instruments = {
  createInstrument: (rootDiv, instrument, pitchArray, barNumber, beatsInBar, subdivision) => {
    pitchArray.forEach(pitch => {
      channels.createChannel(
        rootDiv,
        instrument,
        pitch,
        barNumber,
        beatsInBar,
        subdivision
      );
    });
  }
};

export default instruments;
