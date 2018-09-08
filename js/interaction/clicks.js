const clicks = {
  createClicksInteraction: () => {
    const notes = document.getElementsByClassName('note');
    [...notes].forEach(note => {
      note.addEventListener('click', () => {
        if (![...note.classList].includes('active')) {
          note.classList.add('active');
        } else {
          note.classList.remove('active');
        }
      });
    });
  }
};

export default clicks;
