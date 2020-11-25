import React, { Component } from "react";
import CartCard from "./CartCard";

export default class Cart extends Component {
  render() {
    let totalPriceOfCartItems = () => {
      let totalPrice = 0;
      if (this.props.cartItems) {
        this.props.cartItems.forEach((item) => {
          totalPrice =
            parseFloat(item.price) * parseFloat(item.quantity) + totalPrice;
        });
        return totalPrice;
      } else return;
    };
    totalPriceOfCartItems();
    if (localStorage.getItem("cart")) {
      let cartItems = this.props.cartItems;
      return (
        <div
          className={`cart-container ${this.props.cartOpen ? "active" : ""}`}
        >
          <i
            className="close-button fal fa-times"
            onClick={() => this.props.updateCartOpenState()}
          ></i>
          <div className="heading-container">
            <div className="heading">Your Cart</div>
            <div className="items-count">
              {cartItems.length + " "}
              Item(s)
            </div>
          </div>
          <hr />
          {cartItems.map((item) => {
            return (
              <CartCard
                key={item.id}
                title={
                  item.title.length > 19
                    ? `${item.title.substring(0, 19)}...`
                    : item.title
                }
                id={item.id}
                price={"₦" + item.price}
                image={item.image}
                category={item.category}
                quantity={item.quantity}
                cartItems={cartItems}
                updateCartItems={this.props.updateCartItems}
              />
            );
          })}

          <div className="checkout-container">
            <div className="total">
              Total : ₦<span>{totalPriceOfCartItems()}</span>
            </div>
            <div className="checkout-btn">Checkout(pay)</div>
          </div>
        </div>
      );
    } else {
      return (
        <div
          className={`cart-container no-items ${
            this.props.cartOpen ? "active" : ""
          }`}
        >
          <i
            className="close-button fal fa-times"
            onClick={() => this.props.updateCartOpenState()}
          ></i>
          <div className="heading-container">
            <div className="heading">Your Cart</div>
            <div className="items-count">0 Item(s)</div>
          </div>
          <hr />
          <span>No Items In Cart</span>
        </div>
      );
    }
  }
}
