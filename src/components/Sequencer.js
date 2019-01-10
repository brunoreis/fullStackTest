import SequenceList from './SequenceList';
import React from 'react';
import SequenceChooser from './SequenceChooser';
import { withState, compose } from 'recompose';

const Sequencer = ({
  choosenSequence,
  setChoosenSequence,
}) =>
  <div style={{marginTop:20}}>
    {
      choosenSequence
        ? <SequenceList {...{choosenSequence}} />
        : <SequenceChooser {...{setChoosenSequence}} />
    }
  </div>

export default compose(
  withState('choosenSequence', 'setChoosenSequence', null)
)(Sequencer);
