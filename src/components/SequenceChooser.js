import React from 'react';
import { withState, compose } from 'recompose';
import PropTypes from 'prop-types';
import { availableSequences } from '../sequencers/createGenerator';

const ListItem = ({name, sequence, onClick}) =>
  <a href="#" {...{onClick}} className="list-group-item list-group-item-action"> {/* eslint-disable-line jsx-a11y/anchor-is-valid */}
    {name}
  </a>

const List = ({
  setChoosenSequence,
}) =>
  <div className="AddSequencer">
    <ul className="list-group InnerText">
      {
        availableSequences.map(
          (sequenceData) => <ListItem
            key={sequenceData.name}
            onClick = {() => setChoosenSequence(sequenceData)}
            {...sequenceData}
          />
        )
      }
    </ul>
  </div>

const Button = ({onClick}) =>
  <button {...{onClick}} type="button" className="btn btn-primary">
    Choose sequencer.
  </button>

const SequenceChooser = ({
  choosing,
  setChoosing,
  setChoosenSequence,
}) =>
  <div>
    {
      choosing
        ? <List {...{setChoosenSequence}}/>
        : <Button
            onClick={() => setChoosing(true)}
          />
      // @todo: transform onClick in handler to avoid double rendering
    }
  </div>

const SmartButton = compose(
  withState('choosing', 'setChoosing', false),
)(SequenceChooser)

SmartButton.propTypes = {
  setChoosenSequence: PropTypes.func.isRequired,
}

export default SmartButton;
