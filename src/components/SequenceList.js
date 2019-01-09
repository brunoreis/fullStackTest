import React from 'react';

export default () =>
  <div className="card InnerText" style={{
    width: '18rem'
  }}>
    <div className="card-body">
      <h5 className="card-title d-flex  justify-content-around align-items-center">
        {
          /* <img src={logo} className="App-logo" alt="logo" /> */
        }
        <div>
          Partial Sum
        </div>
        <a href="#" className="btn btn-primary btn-sm">Next</a>
      </h5>

      <ul className="list-group List">
        <li className="list-group-item d-flex  justify-content-around">
          <div className="ItemIndex">
            #2
          </div>
          <div className="ItemValue">
            45
          </div>
        </li>
        <li className="list-group-item d-flex  justify-content-around">
          <div className="ItemIndex">
            #1
          </div>
          <div className="ItemValue">
            20
          </div>
        </li>
      </ul>
    </div>
  </div>;
