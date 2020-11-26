import React, { Component } from "react";

export default class About extends Component {
  render() {
    return (
      <div className="page-container">
        <div className="mini-header">
          <div className="page-title" data-content="About"></div>
        </div>
        <div className="section">
          <div className="heading">About Us</div>
          <p className="subheading">
            Our latest collections have been crafted by some of the best
            clothing designers in the world
          </p>
          <div className="content-container">
            <div className="coming-soon">Coming Soon...</div>
          </div>
        </div>
      </div>
    );
  }
}
