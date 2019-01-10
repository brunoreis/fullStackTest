/*
manage and validate user input
set extraArguments

this sure can be improved with a good refactor

*/

import React from 'react';
import {
  compose,
  withState,
  withHandlers,
  withPropsOnChange,
  lifecycle,
} from 'recompose';
import { equals } from 'ramda';

const validate = (start, step) => {
  let message = "";
  if(
    (!start || start.trim() === "")
    &&
    (!step || step.trim() === "")
  ) {
    message = "After you add values, press the 'Next' button"
  }
  if(
    (
      start
      && (parseInt(start) != start)//eslint-disable-line
    ) ||
    (
      step
      && (parseInt(step) != step) //eslint-disable-line
    )
  ) {
    message = "Please use integer numbers only"
  }
  return {
    message,
    result: !!(!message && start && step),
  }
}

const RangeConfigRenderer = ({
  start,
  changeStart,
  step,
  changeStep,
  message,
}) =>
  <div>
    <p style={{ fontSize: "0.8em" }}>
    Please, tell us on what number to start and what is the interval (step) between the numbers of the sequence.
    </p>
    <div className="input-group">
      <div className="input-group-prepend">
        <span className="input-group-text" id="">Start and Step</span>
      </div>
      <input
        type="text"
        className="form-control"
        value={start}
        onChange={changeStart}
      />
      <input
        type="text"
        className="form-control"
        value={step}
        onChange={changeStep}
      />
    </div>
    <p className="text-muted">
      {message}
    </p>
  </div>

const RangeConfig = compose(
  withState('start', 'setStart', ''),
  withState('step', 'setStep', ''),
  withHandlers({
    changeStart: ({ setStart }) => evt => {
      setStart(evt.target.value)
    },
    changeStep: ({ setStep }) => evt => {
      setStep(evt.target.value)
    },
  }),
  withPropsOnChange(
    ['start', 'step'],
    ({ start, step }) => {
      return { message: validate(start, step).message };
    }
  ),
  lifecycle({
    componentDidUpdate() {
      const isValid = validate(this.props.start, this.props.step).result;
      if( isValid ) {
        const extraArguments = [
          parseInt(this.props.start),
          parseInt(this.props.step)
        ];
        if( !equals(extraArguments, this.props.extraArguments) ) {
          this.props.setExtraArguments(extraArguments);
        }
      }
    }
  })
)(RangeConfigRenderer);

export default RangeConfig;
