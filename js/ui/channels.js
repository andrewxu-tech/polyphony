import musicData from '../interaction/music-data.js';
import clicks from '../interaction/clicks.js';

const channels = {
  createChannel: (rootDiv, instrument, pitch, barNumber, beatsInBar, subdivision) => {
    const channel = document.createElement('div');
    channel.classList.add('channel');
    channel.classList.add(instrument);
    channel.classList.add(pitch);
    musicData[`${instrument}-${pitch}`] = [];

    for (let i = 0; i < barNumber; i++) {
      const bar = document.createElement('div');
      bar.classList.add('bar');

      for (let i = 0; i < (beatsInBar * subdivision); i++) {
        const noteNode = document.createElement('div');
        noteNode.classList.add('note');
        bar.appendChild(noteNode);
      }
      channel.appendChild(bar);
    }

    rootDiv.appendChild(channel);
    clicks.createClicksInteraction(instrument, pitch);
  }
};

export default channels;
