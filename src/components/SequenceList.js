import React from 'react';
import {
  compose,
  withState,
  withHandlers,
} from 'recompose';
import { concat } from 'ramda';
import PropTypes from 'prop-types';
import createGenerator from '../sequencers/createGenerator';
import Sequence from './Sequence';
import SequenceHeader from './SequenceHeader';

const SequenceList = ({
  choosenSequence,
  next,
  sequence,
  extraArguments,
  setExtraArguments
}) =>
  <div className="card InnerText" style={{
    width: '18rem'
  }}>
    <div className="card-body">
      <SequenceHeader
        {...{
          choosenSequence, // maybe we can pass the title only
          next,
          extraArguments,
          setExtraArguments,
          sequenceStarted: sequence.length > 0 // rename to showConfig ?
        }}
      />
      <Sequence {...{sequence}}/>
    </div>
  </div>;

SequenceList.propTypes = {
  choosenSequence: PropTypes.shape({
    name: PropTypes.string.isRequired,
    sequencer: PropTypes.func.isRequired,
  }),
  next: PropTypes.func.isRequired,
  sequence: PropTypes.array,
}

export default compose(
  // extraArguments === null mean that sequence needs to be configured
  // the "next" button will be disabled
  withState('extraArguments', 'setExtraArguments', null),
  withState('activatedSequence', 'setActivatedSequencer', null),
  withState('sequence', 'setSequence', []),
  withHandlers({
    next: ({
      setSequence,
      sequence,
      activatedSequence,
      extraArguments,
      choosenSequence,
      setActivatedSequencer,
    }) => () => {
      let newActivatedSequencer;
      if(!activatedSequence) {
        newActivatedSequencer = createGenerator(
          choosenSequence.sequencer,
          ...extraArguments
        );
        setActivatedSequencer(newActivatedSequencer)
      }
      const sequencer = activatedSequence || newActivatedSequencer;
      setSequence(
        concat(
          [
            {
              index: sequence.length+1,
              value: sequencer.next()
            }
          ],
          sequence
        )
      );
    },
  })
)(SequenceList);
