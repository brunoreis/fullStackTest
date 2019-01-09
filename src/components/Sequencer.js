import SequenceList from './SequenceList';
import React from 'react';
import SequenceChooser from './SequenceChooser';
import { withState, compose } from 'recompose';

const Sequencer = ({
  activatedSequence,
  setActivatedSequence,
}) =>
  <div>
    {
      activatedSequence
        ? <SequenceList />
        : <SequenceChooser {...{setActivatedSequence}} />
    }
  </div>

export default compose(
  withState('activatedSequence', 'setActivatedSequence', null)
)(Sequencer);
