import SequenceList from './SequenceList';
import React from 'react';
import SequenceChooser from './SequenceChooser';
import { withState, compose } from 'recompose';
import { availableSequences } from '../sequencers/createGenerator';
console.log("​availableSequences", availableSequences);


const Sequencer = ({
  choosenSequence,
  setChoosenSequence,
}) =>
  <div>
    {
      choosenSequence
        ? <SequenceList {...{choosenSequence}} />
        : <SequenceChooser {...{setChoosenSequence}} />
    }
  </div>

export default compose(
  withState('choosenSequence', 'setChoosenSequence', availableSequences[0])
)(Sequencer);
