import musicData from '../interaction/music-data.js';
import clicks from '../interaction/clicks.js';
import emojiMap from './emoji-map.js';

const channels = {
  createChannel: (rootDiv, channelContainer, instrument, pitch, barNumber, beatsInBar, subdivision, isWhiteNote, delay) => {
    const channel = document.createElement('div');
    channel.classList.add('channel');
    channel.classList.add(instrument);
    channel.classList.add(pitch);
    if (!isWhiteNote) {
      channel.classList.add('black-note');
    }

    const channelTitle = document.createElement('div');
    channelTitle.classList.add('channel-title');
    channelTitle.innerHTML = `${emojiMap[instrument]}: ${pitch}`;
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

    channelContainer.appendChild(channel);

    const audioElement = document.createElement('audio');
    audioElement.classList.add(`${instrument}-${pitch}-audio`);
    audioElement.type = 'audio/mpeg';

    for (let i = 1; i <= delay; i++) {
      const delayAudioElement = document.createElement('audio');
      delayAudioElement.classList.add(`${instrument}-${pitch}-delay-${i}-audio`);
      delayAudioElement.type = 'audio/mpeg';
      rootDiv.appendChild(delayAudioElement);
    }

    rootDiv.appendChild(audioElement);
    clicks.createClicksInteraction(channel, instrument, pitch);
  }
};

export default channels;
