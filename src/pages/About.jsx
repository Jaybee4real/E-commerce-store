import React, { Component } from "react";

export default class About extends Component {
  render() {
    return (
      <div
        className={`page-container ${this.props.cartOpen ? "cart-active" : ""}`}
      >
        <div className="mini-header">
          <div className="page-title" data-content="About"></div>
        </div>
        <div className="section">
          <div className="heading">About Us</div>
          <p className="subheading">
            We are a trusted clothing brand that loves to use our expertise to
            find and deliver the best clothing items to our customers at the
            best available price.
          </p>
          <div className="content-container">
            <div className="coming-soon">Coming Soon...</div>
          </div>
        </div>
      </div>
    );
  }
}
