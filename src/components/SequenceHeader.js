/* responsibilities
show the header
show the config options
set the extra arguments
*/
import React from 'react';
import SequenceIntroAndConfigFields from './SequenceIntroAndConfigFields/SequenceIntroAndConfigFields';

const Buttons = ({
  pipeIsEven,
  pipeAccumulator,
  toggleAccumulator,
  toggleIsEven,
}) =>
  <div className="btn-group mb-2" role="group" aria-label="Third group">
    <button
      type="button"
      className={`btn btn-sm ${pipeAccumulator ? 'btn-secondary' : 'btn-default'}`}
      onClick={toggleAccumulator}
    >
      accumulator
    </button>
    <button
      type="button"
      className={`btn btn-sm ${pipeIsEven ? 'btn-secondary' : 'btn-default'}`}
      onClick={toggleIsEven}
    >
      isEven
    </button>
  </div>

export default ({
  extraArguments, // probably not needed anymore
  setExtraArguments,
  choosenSequence,
  next,
  sequenceStarted,
  toggleIsEven,
  toggleAccumulator,
  pipeIsEven,
  pipeAccumulator
}) =>
  <div>
    <h5 className="card-title d-flex  justify-content-around align-items-center">
      {
        /* <img src={logo} className="App-logo" alt="logo" /> */
      }
      <div>
        {choosenSequence.name}
      </div>
      <button
        disabled={extraArguments == null}
        className="btn btn-primary btn-sm"
        onClick = {next}
      >
        Next
      </button>
    </h5>
    <Buttons
      {...{
        pipeIsEven,
        pipeAccumulator,
        toggleAccumulator,
        toggleIsEven
      }}
    />
    {
      !sequenceStarted
      &&
      <SequenceIntroAndConfigFields
        {...{
          choosenSequence,
          setExtraArguments,
          extraArguments
        }}
      />
    }
  </div>
