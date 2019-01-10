/*
 defines which configuration to show
*/
import React from 'react';
import { sequences } from '../../sequencers/createGenerator';
import RangeConfig from './RangeConfig';
import NoInputConfig from './NoInputConfig';

const introTexts = {
  [sequences.FACTORIAL]:'In mathematics, the factorial of a positive integer n, denoted by n!, is the product of all positive integers less than or equal to n.',
  [sequences.FIBONACCI]:'In mathematics, the Fibonacci numbers, commonly denoted Fn form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1.',
  [sequences.RANGE]:'Please, tell us on what number to start and what is the interval (step) between the numbers of the sequence.',
  [sequences.PRIME]:'A prime number (or a prime) is a natural number greater than 1 that cannot be formed by multiplying two smaller natural numbers.',
  [sequences.PARTIAL_SUM]:'Sorry, our developer run out of time to code this UI. Please check the test cases to see the sequence working.',
};


const SequenceIntroAndConfigFields = ({
  choosenSequence,
  extraArguments,
  setExtraArguments,
}) => {
  if(choosenSequence.type === sequences.RANGE) {
    return <RangeConfig {...{setExtraArguments, extraArguments}}/>;
  } else {
    return <NoInputConfig {...{setExtraArguments}} introText={introTexts[choosenSequence.type]}/>;
  }

}

export default SequenceIntroAndConfigFields;
