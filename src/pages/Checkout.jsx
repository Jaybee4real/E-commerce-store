import React, { Component } from "react";
import CartCard from "../components/CartCard";

export default class Checkout extends Component {
  render() {
    let cartItems = this.props.cartItems;
    return (
      <div div className="checkout-page-container page-container">
        <div className="checkout-header mini-header">
          <div className="page-title" data-content="Checkout"></div>
        </div>

        <div className="checkout-cart-container">
          <div className="heading">Your Cart</div>
          <hr />
          {cartItems.map((item) => {
            return (
              <CartCard
                key={item.id}
                title={item.title}
                id={item.id}
                price={"₦" + item.price}
                image={item.image}
                category={item.category}
                quantity={item.quantity}
                description={item.description}
                dimension={120}
                cartItems={cartItems}
                updateCartItems={this.props.updateCartItems}
              />
            );
          })}

          <div className="options-container">
            <div
              className="clear-cart"
              onClick={() => {
                this.props.updateCartItems([]);
              }}
            >
              Clear Cart
            </div>
            <div className="paypal btn">
              <i className="fa fa-paypal"></i>Pay With PayPal
            </div>
            <div className="paystack btn">
              <div className="img"></div>Pay With PayStack
            </div>
          </div>
        </div>
      </div>
    );
  }
}
