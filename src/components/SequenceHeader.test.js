// Link.react.test.js
import React from 'react';
import SequenceHeader from './SequenceHeader';
import renderer from 'react-test-renderer';

test('SequenceHeader shows the addAccumulator toggle button', () => {
  const component = renderer.create(
    <SequenceHeader
      choosenSequence = {{
        name: "Partial",
      }}
      setExtraArguments ={
        () => {console.log("setExtraArguments called")}
      }
      next ={
        () => {console.log("next called")}
      }
      sequenceStarted = {false}
    />,
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
