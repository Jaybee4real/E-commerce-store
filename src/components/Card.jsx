import React, { Component } from "react";
import "./styles/card.scss";

export default class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemQuantity: 1,
    };
  }
  render() {
    let cartItems = this.props.cartItems;
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
      console.log(this.props.id)
      let newItem = {
        category: this.props.category,
        quantity: this.state.itemQuantity,
        price: this.props.price,
        image: this.props.image,
        title: this.props.title,
        id: this.props.id,
        description: this.props.description,
      };
      if (!localStorage.getItem("cart")) {
        let cart = [];
        cart.push(newItem);
        this.props.updateCartItems(cart);
        localStorage.setItem("cart", JSON.stringify(cart));
      } else if (localStorage.getItem("cart")) {
        let newCartItems = cartItems.filter((item) => item.id !== newItem.id);
        newCartItems.push(newItem);
        this.props.updateCartItems(newCartItems);
      }
    };

    return (
      <div className="card-container">
        <img src={this.props.image} height={200} width={200} alt="" />
        <div className="category">{this.props.category}</div>
        <div className="rating">
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star-o"></i>
        </div>
        <div className="name">
          {this.props.title.length > 68
            ? `${this.props.title.substring(0, 68)}...`
            : this.props.title}
        </div>
        <div className="price">
          price:
          <span>₦{this.props.price}</span>
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
              onChange={() => {}}
            ></input>
            <div
              className="increase"
              onClick={() => updateItemQuantity("increase")}
            >
              +
            </div>
          </div>
          <div
            ref={(e) => (this.addToCartBtn = e)}
            className="add-to-cart-btn"
            onClick={addCardItemToCart}
          >
            Add To Cart<i className="fad fa-shopping-cart"></i>
          </div>
        </div>
      </div>
    );
  }
}
