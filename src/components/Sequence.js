import React from 'react';
import PropTypes from 'prop-types';

const SequenceItem = ({ index, value, isEven }) =>
  <li
    className="list-group-item d-flex  justify-content-around"
  >
    <div className="ItemIndex">
      #{index}
    </div>
    <div className="ItemValue">
      {value} {isEven ? '(even)' : null}
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

export default Sequence;
