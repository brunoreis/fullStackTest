import React from 'react';

export default () =>
  <div>
    <button type="button" className="btn btn-primary">
      Choose sequencer.
    </button>
    <div className="AddSequencer">
      <ul className="list-group InnerText">
        <a href="#" className="list-group-item list-group-item-action">
          Factorial
        </a>
        <a href="#" className="list-group-item list-group-item-action">
          Fibonacci
        </a>
        <a href="#" className="list-group-item list-group-item-action">
          Range
        </a>
        <a href="#" className="list-group-item list-group-item-action">
          Prime
        </a>
        <a href="#" className="list-group-item list-group-item-action">
          Partial Sum
        </a>
      </ul>
    </div>
  </div>
