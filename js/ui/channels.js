import musicData from '../interaction/music-data.js';
import clicks from '../interaction/clicks.js';

const channels = {
  createChannel: (rootDiv, instrument, pitch, barNumber, beatsInBar, subdivision) => {
    const channel = document.createElement('div');
    channel.classList.add('channel');
    channel.classList.add(instrument);
    channel.classList.add(pitch);

    const channelTitle = document.createElement('div');
    channelTitle.classList.add('channel-title');
    channelTitle.innerHTML = `${instrument}: ${pitch}`;
    channel.appendChild(channelTitle);

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

    const audioElement = document.createElement('audio');
    audioElement.classList.add(`${instrument}-${pitch}-audio`);
    audioElement.type = 'audio/mpeg';

    rootDiv.appendChild(audioElement);
    clicks.createClicksInteraction(channel, instrument, pitch);
  }
};

export default channels;
