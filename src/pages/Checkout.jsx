import React, { Component } from "react";
import { Link } from "react-router-dom";
import CartCard from "../components/MiniCard";
import "./styles/checkout.scss";

export default class Checkout extends Component {
  render() {
    let cartItems = this.props.cartItems;
    let totalPriceOfCartItems = () => {
      let totalPrice = 0;
      if (this.props.cartItems) {
        this.props.cartItems.forEach((item) => {
          totalPrice =
            parseFloat(item.price) * parseFloat(item.quantity) + totalPrice;
        });
        return Math.round(totalPrice * 100) / 100;
      } else return;
    };

    //////////////Payment Methods////////
    ////////////////////////////////////
    let payWithPaystack = () => {
      let amount = Math.round(totalPriceOfCartItems());
      let email = prompt(
        "Please Enter The Email Address To Recieve The Paystack(stripe) Reciept"
      );
      window.PaystackPop.setup({
        key: process.env.REACT_APP_PAYSTACK_PUBLIC_KEY,
        email,
        amount: amount * 100,
        callback: (response) => console.log(response),
      }).openIframe();
    };

    //////////////////////////////

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

          {this.props.cartItems.length > 0 ? (
            <div className="options-container">
              <div className="total">
                Total: <span>₦{totalPriceOfCartItems()}</span>
              </div>
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
              <div className="paystack btn" onClick={() => payWithPaystack()}>
                <div className="img"></div>Pay With PayStack
              </div>
            </div>
          ) : (
            <div className="options-container">
              <div className="notice">There Are No Items In Your Cart</div>
              <Link onClick={() => this.props.updateActiveScreen("shop")} className="btn blue" to="/shop">
                Continue Shopping
              </Link>
            </div>
          )}
        </div>
      </div>
    );
  }
}
