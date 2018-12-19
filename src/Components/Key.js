import React from 'react';
import Synth from '../Utils/audio';

const BASE_CLASS_NAME = 'piano-key';

const playNote = (e, note) => {
  Synth.triggerAttackRelease(note, '8n');
  e.stopPropagation();
}

const Key = ({ note, isSharp, children }) => (
  <div
    className={`${BASE_CLASS_NAME} ${note} ${isSharp ? 'sharp' : ''}`}
    onClick={(e) => playNote(e, note)}>
    {children}
  </div>
);

export default Key;
