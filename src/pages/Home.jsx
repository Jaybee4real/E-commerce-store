import React, { Component } from "react";

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className="header">
          <div className="left-side">
            <h1>
              Get Classy, <br />
              On Purpose
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
