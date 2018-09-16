import constants from './constants.js';
import instruments from './ui/instruments.js';

import playSound from './interaction/play-sound.js';

const rootDiv = document.getElementById('root');

instruments.createInstrument(
  rootDiv,
  'drums',
  ['cymbal', 'hihat', 'clap', 'snare', 'hightom', 'lowtom', 'kick'],
  constants.barNumber,
  constants.beatsInBar,
  constants.subdivision,
  false
);

instruments.createInstrument(
  rootDiv,
  'synth',
  ['f5', 'e5', 'eflat5', 'd5', 'csharp5', 'c5', 'b4', 'bflat4', 'a4', 'gsharp4',
    'g4', 'fsharp4', 'f4', 'e4', 'eflat4', 'd4', 'csharp4', 'c4', 'b3', 'bflat3',
    'a3', 'gsharp3', 'g3', 'fsharp3', 'f3'],
  constants.barNumber,
  constants.beatsInBar,
  constants.subdivision,
  true
);

playSound(constants.barNumber, constants.beatsInBar, constants.subdivision);
