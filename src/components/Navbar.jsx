import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./styles/navbar.scss"

export default class Navbar extends Component {
  render() {
    return (
      <div
        className={`navbar-container ${this.props.cartOpen ? "cart-open" : ""}`}
      >
        <i
          className={`fa fa-bars navbar-item ${this.props.activeScreen}`}
          onClick={() => this.props.toggleSidebar()}
        ></i>
        <div className={`logo ${this.props.activeScreen}`}>
          E-Commerce Store
        </div>
        <div className="links-container">
          <Link
            className={`navbar-item link ${
              this.props.activeScreen === "home" ? "active" : " "
            } ${this.props.activeScreen}`}
            to="/home"
            onClick={() => this.props.updateActiveScreen("home")}
          >
            Home
          </Link>
          <Link
            className={`navbar-item link  ${
              this.props.activeScreen === "shop" ? "active" : " "
            } ${this.props.activeScreen}`}
            to="/shop"
            onClick={() => this.props.updateActiveScreen("shop")}
          >
            Shop
          </Link>
          <Link
            className={`navbar-item link ${
              this.props.activeScreen === "about" ? "active" : " "
            } ${this.props.activeScreen}`}
            to="/about"
            onClick={() => this.props.updateActiveScreen("about")}
          >
            About
          </Link>
        </div>
        <div className="right-side">
          <i
            className={`navbar-item fa fa-search ${this.props.activeScreen}`}
          ></i>
          <i
            className={`navbar-item fa fa-shopping-cart ${
              this.props.cartItems && this.props.cartItems.length > 0
                ? "cart-number"
                : ""
            } ${this.props.activeScreen}`}
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
