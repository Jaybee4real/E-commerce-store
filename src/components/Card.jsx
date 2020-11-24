import React, { Component } from "react";

export default class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemQuantity: 1,
    };
  }
  render() {
    let updateItemQuantity = (arg) => {
      if (arg === "decrease") {
        if (this.state.itemQuantity === 1) return;
        this.setState({
          itemQuantity: this.state.itemQuantity - 1,
        });
      } else if (arg === "increase") {
        this.setState({
          itemQuantity: this.state.itemQuantity + 1,
        });
      } else {
        this.setState({
          itemQuantity:
            this.itemQuantityInput === " " ? this.itemQuantityInput : 1,
        });
      }
    };

    let addCardItemToCart = () => {
      let newItem = {
        category: this.category.innerHTML,
        quantity: this.state.itemQuantity,
        price: this.price.innerHTML,
        image: this.itemImage.src,
      };

      if (localStorage.getItem("cart") !== null) {
        let cart = JSON.parse(localStorage.getItem("cart"));
        cart.forEach((cartItem) => {
          if (cartItem === newItem) {
            console.log("this");
            return;
          }
        });
        localStorage.setItem("cart", JSON.stringify(cart));
        cart.push(newItem);
      } else {
        let cart = [];
        cart.push(newItem);
        console.log(cart);
        localStorage.setItem("cart", JSON.stringify(cart));
      }
    };
    return (
      <div className="card-container">
        <img
          ref={(e) => (this.itemImage = e)}
          src={this.props.image}
          height={200}
          width={200}
          alt=""
        />
        <div className="category" ref={(e) => (this.category = e)}>
          {this.props.category}
        </div>
        <div className="rating">
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star-o"></i>
        </div>
        <div className="name">{this.props.title}</div>
        <div className="price">
          price:
          <span ref={(e) => (this.price = e)}>₦{this.props.price}</span>
        </div>

        <div className="add-to-cart-container">
          <div className="quantity-container">
            <div
              className="decrease"
              onClick={() => updateItemQuantity("decrease")}
            >
              -
            </div>
            <input
              type="number"
              value={this.state.itemQuantity}
              onChange={() => updateItemQuantity()}
              ref={(e) => (this.itemQuantityInput = e)}
            ></input>
            <div
              className="increase"
              onClick={() => updateItemQuantity("increase")}
            >
              +
            </div>
          </div>
          <div className="add-to-cart-btn" onClick={addCardItemToCart}>
            Add To Cart<i className="fad fa-shopping-cart"></i>
          </div>
        </div>
      </div>
    );
  }
}
