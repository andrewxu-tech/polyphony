import musicData from './music-data.js';

const clicks = {
  createClicksInteraction: (instrument, pitch) => {
    const notes = document.getElementsByClassName('note');
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
