import constants from './constants.js';
import channels from './ui/channels.js';

import clicks from './interaction/clicks.js';

const rootDiv = document.getElementById('root');

channels.createChannel(
  rootDiv,
  constants.barNumber,
  constants.beatsInBar,
  constants.subdivision
);

clicks.createClicksInteraction();
