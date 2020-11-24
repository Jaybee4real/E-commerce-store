import React, { Component } from "react";

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className="header alternate" style={{backgroundColor: '#6b5b4a'}}>
          <div className="left-side">
            <h1>
              Be a Dapper, <br />
              Consciously
            </h1>
            <div className="btn">Explore</div>
          </div>
          <div className="right-side">
            <div className="image"></div>
          </div>
        </div>
      </div>
    );
  }
}
