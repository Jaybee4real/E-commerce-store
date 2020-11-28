import React, { Component } from "react";
import Card from "../components/MiniCard";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shopItems: [],
      loading: true,
    };
  }

  componentDidMount() {
    if (this.state.shopItems.length === 0) {
      fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((data) => {
          data.forEach((data) => {
            let prev = this.state.shopItems;
            prev.push(data);
            this.setState({
              shopItems: prev,
              loading: false,
            });
          });
        });
    }
  }
  render() {
    let shopItems = this.state.shopItems;
    /////////////////////
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
            <div className="">
             
            </div>
          </div>
        </div>
      </div>
    );
  }
}
