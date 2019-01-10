import React from 'react';
import {
  compose,
  lifecycle,
} from 'recompose';

const NoInputConfigRenderer = ({introText}) =>
  <div>
    <p style={{ fontSize: "0.8em" }}>
      {introText}
    </p>
  </div>

const NoInputConfig = compose(
  lifecycle({
    componentDidMount() {
      this.props.setExtraArguments([]);
    }
  })
)(NoInputConfigRenderer);

export default NoInputConfig;
