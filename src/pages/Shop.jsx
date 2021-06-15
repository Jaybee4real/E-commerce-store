import React, { Component } from "react";
import Card from "../components/Card";

export default class Shop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      loading: true,
      amountFilter: 0,
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
          title={item.title}
          id={item.id}
          price={item.price}
          image={item.image}
          category={item.category}
          cartItems={this.props.cartItems}
          updateCartItems={this.props.updateCartItems}
          description={item.description}
        />
      ))
    ) : (
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        // xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="25 25 50 50"
        style={{ width: "110px", height: "auto", marginTop: "10rem" }}
      >
        <circle
          cx="50"
          cy="50"
          r="20"
          fill="none"
          strokeWidth="3"
          stroke="#175a71"
          strokeLinecap="round"
          strokeDashoffset="0"
          strokeDasharray="100, 200"
        >
          <animateTransform
            attributeName="transform"
            attributeType="XML"
            type="rotate"
            from="0 50 50"
            to="360 50 50"
            dur="2.5s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="stroke-dashoffset"
            values="0;-30;-124"
            dur="1.25s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="stroke-dasharray"
            values="0,200;110,200;110,200"
            dur="1.25s"
            repeatCount="indefinite"
          />
        </circle>
      </svg>
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
            <div className="image image-1"></div>
          </div>
        </div>

        <div className="products-section section shop">
          <h1 className="heading">Products</h1>
          <div className="content">
            <div className="menu">
              <div className="input-container">
                <input type="text" placeholder="search product" />
                <i className="fal fa-search"></i>
              </div>
              <div className="menu-heading">Product Categories</div>
              <div className="categories-container">
                <div className="category">Mens Clothing</div>
                <div className="category">Jewelery</div>
                <div className="category">Electronics</div>
                <div className="category">Womens Clothing</div>
              </div>

              <hr />

              <div className="menu-heading">Filter</div>
              <div className="mini-heading">Filter by price</div>
              <div className="input-container range">
                <input
                  type="range"
                  name="ammount-filter"
                  min="0"
                  max="10000"
                  id=""
                  value={this.state.amountFilter}
                  onChange={(e) =>
                    this.setState({ amountFilter: e.target.value })
                  }
                />
                <span>₦0 - ₦{this.state.amountFilter}</span>
              </div>

              <div className="mini-heading">Filter by keyword</div>
              <div className="keyword-container">
                <div className="keyword active">All</div>
                <div className="keyword">Popular</div>
                <div className="keyword">New</div>
                <div className="keyword">Trending</div>
                <div className="keyword">Hot</div>
                <div className="keyword">Sold Out</div>
              </div>
            </div>

            <div className="content-container shop">{this.populateData()}</div>
          </div>
        </div>
      </div>
    );
  }
}
