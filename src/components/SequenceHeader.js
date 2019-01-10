/* responsibilities
show the header
show the config options
set the extra arguments
*/
import React from 'react';
import SequenceIntroAndConfigFields from './SequenceIntroAndConfigFields/SequenceIntroAndConfigFields';

export default ({
  extraArguments,
  setExtraArguments,
  choosenSequence,
  next,
  sequenceStarted,
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
