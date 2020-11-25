import React, { Component } from "react";
import Card from "../components/Card";

export default class Shop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      loading: true,
    };
  }

  componentDidMount() {
    if (this.state.items.length === 0) {
      fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((data) => {
          data.forEach((data) => {
            let prev = this.state.items;
            prev.push(data);
            this.setState({
              items: prev,
              loading: false,
            });
          });
        });
    }
  }

  populateData = () => {
    return this.state.loading === false ? (
      this.state.items.map((item) => (
        <Card
          key={item.id}
          title={
            item.title.length > 68
              ? `${item.title.substring(0, 68)}...`
              : item.title
          }
          id={item.id}
          price={item.price}
          image={item.image}
          category={item.category}
          cartItems={this.props.cartItems}
          updateCartItems={this.props.updateCartItems}
        />
      ))
    ) : (
      <h1>Loading ...</h1>
    );
  };

  render() {
    return (
      <div
        className={`page-container ${this.props.cartOpen ? "cart-active" : ""}`}
      >
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

        <div className="products-section section">
          <h1 className="heading">Products</h1>
          <div className="content-container">{this.populateData()}</div>
        </div>
      </div>
    );
  }
}
