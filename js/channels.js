const channels = {
  createChannel: (rootDiv) => {
    const channel = document.createElement('div');
    channel.classList.add('channel');
    rootDiv.appendChild(channel);
  }
};

export default channels;
