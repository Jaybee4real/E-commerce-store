import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <div
        className={`navbar-container ${this.props.cartOpen ? "cart-open" : ""}`}
      >
        <i className="fa fa-bars navbar-item" onClick={() => this.props.toggleSidebar()}></i>
        <div className="logo">E-Commerce Store</div>
        <div className="links-container">
          <Link
            className={`navbar-item link ${
              this.props.activeScreen === "home" ? "active" : " "
            }`}
            to="/home"
            onClick={() => this.props.updateActiveScreen("home")}
          >
            Home
          </Link>
          <Link
            className={`navbar-item link  ${
              this.props.activeScreen === "shop" ? "active" : " "
            }`}
            to="/shop"
            onClick={() => this.props.updateActiveScreen("shop")}
          >
            Shop
          </Link>
          <Link
            className={`navbar-item link ${
              this.props.activeScreen === "about" ? "active" : " "
            }`}
            to="/about"
            onClick={() => this.props.updateActiveScreen("about")}
          >
            About
          </Link>
        </div>
        <div className="right-side">
          <i className="navbar-item fa fa-search"></i>
          <i
            className={`navbar-item fa fa-shopping-cart ${
              this.props.cartItems && this.props.cartItems.length > 0
                ? "cart-number"
                : ""
            }`}
            onClick={() => this.props.updateCartOpenState()}
            data-count={`${
              this.props.cartItems ? this.props.cartItems.length : ""
            }`}
          ></i>
        </div>
      </div>
    );
  }
}

let scroll = window.pageYOffset;
document.addEventListener("scroll", function (e) {
  let navbar = document.querySelector(".navbar-container");
  var offset = window.pageYOffset;
  scroll = offset;
  if (scroll > 1) {
    navbar.classList.add("scroll");
  } else {
    navbar.classList.remove("scroll");
  }
});
