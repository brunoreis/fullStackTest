import React from 'react';
import { withState, compose } from 'recompose';
import PropTypes from 'prop-types';

const SEQUENCES = [
  {name:"Factorial", sequence: () => {}},
  {name:"Fibonacci", sequence: () => {}},
  {name:"Range", sequence: () => {}},
  {name:"Prime", sequence: () => {}},
  {name:"Partial Sum", sequence: () => {}},
]

const ListItem = ({name, sequence, onClick}) =>
  <a href="#" {...{onClick}} className="list-group-item list-group-item-action">
    {name}
  </a>

const List = ({
  setActivatedSequence,
}) =>
  <div className="AddSequencer">
    <ul className="list-group InnerText">
      {
        SEQUENCES.map(
          (sequenceData) => <ListItem
            onClick = {() => setActivatedSequence(sequenceData)}
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
  setActivatedSequence,
}) =>
  <div>
    {
      choosing
        ? <List {...{setActivatedSequence}}/>
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
  setActivatedSequence: PropTypes.func.isRequired,
}

export default SmartButton;
