import React from 'react';
import {
  compose,
  lifecycle,
  withState,
  withHandlers,
} from 'recompose';
import { concat } from 'ramda';
import PropTypes from 'prop-types';
import createGenerator from '../sequencers/createGenerator';

const SequenceItem = ({ index, value }) =>
  <li
    className="list-group-item d-flex  justify-content-around"
  >
    <div className="ItemIndex">
      #{index}
    </div>
    <div className="ItemValue">
      {value}
    </div>
  </li>

const Sequence = ({sequence}) =>
  <ul className="list-group List">
    {
      sequence.map(
        item => <SequenceItem {...item} key={item.index} />
      )
    }
  </ul>

Sequence.propTypes = {
  sequence: PropTypes.arrayOf(
    PropTypes.shape({
      index: PropTypes.number.isRequired, // just a helper value, could be calculated
      value: PropTypes.number.isRequired,
    })
  )
}
const SequenceList = ({
  choosenSequence,
  next,
  sequence,
}) =>
  <div className="card InnerText" style={{
    width: '18rem'
  }}>
    <div className="card-body">
      <h5 className="card-title d-flex  justify-content-around align-items-center">
        {
          /* <img src={logo} className="App-logo" alt="logo" /> */
        }
        <div>
          {choosenSequence.name}
        </div>
        <button
          className="btn btn-primary btn-sm"
          onClick = {next}
        >
          Next
        </button> {/* eslint-disable-line jsx-a11y/anchor-is-valid */}
      </h5>

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
  withState('activatedSequence', 'setActivatedSequence', null),
  withState('sequence', 'setSequence', []),
  withHandlers({
    next: ({
      setSequence,
      sequence,
      activatedSequence
    }) => () => {
      setSequence(
        concat( [{ index: sequence.length+1, value:activatedSequence.next() }], sequence )
      );
    },
  }),
  lifecycle({
    componentDidMount(){
      this.props.setActivatedSequence(
        createGenerator(this.props.choosenSequence.sequencer)
      )
    }
  })
)(SequenceList);
