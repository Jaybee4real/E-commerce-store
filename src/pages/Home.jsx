import React, { Component } from "react";

export default class Home extends Component {
  render() {
    return (
      <div
        className={`page-container ${this.props.cartOpen ? "cart-active" : ""}`}
      >
        <div
          className="header alternate"
          style={{ backgroundColor: "#6b5b4a" }}
        >
          <div className="left-side">
            <h1>
              Be a Dapper, <br />
              Consciously
            </h1>
            <div className="btn">Explore</div>
          </div>
          <div className="right-side">
            <div className="image image-2"></div>
          </div>
        </div>
        <div className="section">
          <div className="heading">Popular Items</div>
          <p className="subheading">
            Our latest collections have been crafted by some of the best
            clothing designers in the world
          </p>
          <div className="content-container">
            <div className="coming-soon">
              Coming Soon...
            </div>
          </div>
        </div>
      </div>
    );
  }
}
