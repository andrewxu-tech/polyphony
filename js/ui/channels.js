const channels = {
  createChannel: (rootDiv, barNumber, beatsInBar, subdivision) => {
    const channel = document.createElement('div');
    channel.classList.add('channel');

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
  }
};

export default channels;
