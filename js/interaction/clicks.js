import musicData from './music-data.js';

const clicks = {
  createClicksInteraction: (channel, instrument, pitch) => {
    const notes = [];
    const bars = channel.childNodes;

    bars.forEach(bar => {
      bar.childNodes.forEach(note => {
        notes.push(note);
      });
    });

    [...notes].forEach((note, index) => {
      note.addEventListener('click', () => {
        if (![...note.classList].includes('active')) {
          note.classList.add('active');
          musicData[`${instrument}-${pitch}`][index] = true;
        } else {
          note.classList.remove('active');
          musicData[`${instrument}-${pitch}`][index] = false;
        }
      });
    });
  }
};

export default clicks;
