import React, { Component } from 'react';
import PianoKey from './Key';
import { NOTE_ORDER } from '../constants';

const getNotes = (startingNote) => {
  let noteIndex = NOTE_ORDER.indexOf(startingNote);
  let currentOctave = 4;

  // Not configurable, 2 octaves
  const notes = [];
  for (let i = 0; i < 24; i += 1) {
    if (noteIndex % NOTE_ORDER.length === 0 && noteIndex !== 0) {
      noteIndex = 0;
      currentOctave += 1;
    }

    notes.push(NOTE_ORDER[noteIndex] + currentOctave);
    noteIndex += 1;
  }

  return notes;
}

const getKeys = (notes) => {
  const keys = [];

  for (let i = 0; i < notes.length; i += 1) {
    const note = notes[i];
    const nextNote = notes[i + 1];
    const isSharp = nextNote && nextNote.indexOf('#') > -1 ? 'sharp' : '';

    if (isSharp) {
      keys.push(
        <PianoKey note={note} isSharp={false}>
          <PianoKey note={nextNote} isSharp={true}/>
        </PianoKey>
      );
      i += 1;
    } else {
      keys.push(<PianoKey note={note} isSharp={false}/>);
    }
  }

  return keys;
}

const Piano = (props) => {
  const notes = getNotes(props.startingNote);
  const keys = getKeys(notes);

  return (
    <div className='piano-wrapper'>
      {keys}
    </div>
  );
};

export default Piano;
