import React from 'react';
import {
  compose,
  withState,
  withHandlers,
} from 'recompose';
import { concat } from 'ramda';
import PropTypes from 'prop-types';
import createGenerator from '../sequencers/createGenerator';
import generator from '../sequencers/generator';

import Sequence from './Sequence';
import SequenceHeader from './SequenceHeader';
import pipeSeq from '../sequencers/pipeSeq';
import accumulator from '../sequencers/accumulator';
import isEven from '../sequencers/isEven';

const SequenceList = ({
  choosenSequence,
  next,
  sequence,
  extraArguments,
  setExtraArguments,
  toggleAccumulator,
  toggleIsEven,
  pipeIsEven,
  pipeAccumulator,
}) =>
  <div style={{
    width: '18rem'
  }}>
    <p className="OutterText">
      Please refresh the page to chose a different sequencer / restart.
    </p>
    <div className="card InnerText">
      <div className="card-body">
        <SequenceHeader
          {...{
            choosenSequence, // maybe we can pass the title only
            next,
            extraArguments,
            setExtraArguments,
            toggleAccumulator,
            toggleIsEven,
            pipeIsEven,
            pipeAccumulator,
            sequenceStarted: sequence.length > 0 // rename to showConfig ?
          }}
        />
        <Sequence {...{sequence}}/>
      </div>
    </div>
  </div>;

SequenceList.propTypes = {
  choosenSequence: PropTypes.shape({
    name: PropTypes.string.isRequired,
    sequencer: PropTypes.func.isRequired,
  }),
  next: PropTypes.func.isRequired,
  sequence: PropTypes.array,
  toggleIsEven: PropTypes.func.isRequired,
  toggleAccumulator: PropTypes.func.isRequired,
}

export default compose(
  // extraArguments === null mean that sequence needs to be configured
  // the "next" button will be disabled
  withState('extraArguments', 'setExtraArguments', null),
  withState('activatedSequence', 'setActivatedSequencer', null),
  withState('sequence', 'setSequence', []),
  withState('pipeAccumulator', 'setPipeAccumulator', false),
  withState('pipeIsEven', 'setPipeIsEven', false),
  withHandlers({
    toggleIsEven: ({ pipeIsEven, setPipeIsEven }) => () => setPipeIsEven(!pipeIsEven),
    toggleAccumulator: ({ pipeAccumulator, setPipeAccumulator }) => () => setPipeAccumulator(!pipeAccumulator),
    next: ({
      setSequence,
      sequence,
      activatedSequence,
      extraArguments,
      choosenSequence,
      setActivatedSequencer,
      pipeIsEven,
      pipeAccumulator,
    }) => () => {
      let newActivatedSequencer;
      if(!activatedSequence) {
        if(pipeAccumulator || pipeIsEven) {
          let pipedSeq = pipeSeq(
            choosenSequence.sequencer,
            ...extraArguments
          );
          if(pipeAccumulator) {
            pipedSeq = pipedSeq.pipeline(accumulator)
          }
          if(pipeIsEven) {
            pipedSeq = pipedSeq.pipeline(isEven)
          }
          newActivatedSequencer = generator(
            pipedSeq.invoke(),
            ...extraArguments
          );
        } else {
          newActivatedSequencer = createGenerator(
            choosenSequence.sequencer,
            ...extraArguments
          );
        }
        setActivatedSequencer(newActivatedSequencer)
      }
      const sequencer = activatedSequence || newActivatedSequencer;
      const nextValue = sequencer.next();
      const nextItem = (typeof nextValue === 'object')
        ? {
          index: sequence.length + 1,
          value: nextValue.number,
          isEven: nextValue.status,
        }
        : {
          index: sequence.length + 1,
          value: nextValue,
          isEven: null,
        }
      setSequence( concat([nextItem], sequence) );
    },
  })
)(SequenceList);
