import constants from './constants.js';
import channels from './ui/channels.js';

import playSound from './interaction/play-sound.js';

const rootDiv = document.getElementById('root');

channels.createChannel(
  rootDiv,
  'drums',
  'cymbal',
  constants.barNumber,
  constants.beatsInBar,
  constants.subdivision
);

channels.createChannel(
  rootDiv,
  'drums',
  'hihat',
  constants.barNumber,
  constants.beatsInBar,
  constants.subdivision
);

channels.createChannel(
  rootDiv,
  'drums',
  'clap',
  constants.barNumber,
  constants.beatsInBar,
  constants.subdivision
);

channels.createChannel(
  rootDiv,
  'drums',
  'snare',
  constants.barNumber,
  constants.beatsInBar,
  constants.subdivision
);

channels.createChannel(
  rootDiv,
  'drums',
  'hightom',
  constants.barNumber,
  constants.beatsInBar,
  constants.subdivision
);

channels.createChannel(
  rootDiv,
  'drums',
  'lowtom',
  constants.barNumber,
  constants.beatsInBar,
  constants.subdivision
);

channels.createChannel(
  rootDiv,
  'drums',
  'kick',
  constants.barNumber,
  constants.beatsInBar,
  constants.subdivision
);

playSound(constants.barNumber, constants.beatsInBar, constants.subdivision);
