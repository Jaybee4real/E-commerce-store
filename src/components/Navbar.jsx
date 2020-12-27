import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./styles/navbar.scss";

export default class Navbar extends Component {
  render() {
    return (
      <div
        className={`navbar-container ${this.props.cartOpen ? "cart-open" : ""}`}
      >
        <i
          className="fa fa-bars navbar-item"
          onClick={() => this.props.toggleSidebar()}
        ></i>
        <div className="logo">E-Commerce Store</div>
        <div className="links-container">
          <Link
            className={`navbar-item link ${
              this.props.activeScreen === "home" ? "active" : " "
            } ${this.props.activeScreen}`}
            to="/"
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

document.addEventListener("scroll", function (e) {
  let navbar = document.querySelector(".navbar-container");
  let shopMenu = document.querySelector(".menu");
  var offset = window.pageYOffset;
  if (offset > 1) {
    navbar.classList.add("scroll");
  }
  if (offset > 850 && shopMenu !== null) {
    shopMenu.classList.add("fixed");
  }
  if (offset < 850 && shopMenu !== null) {
    shopMenu.classList.remove("fixed");
  }
  if (offset < 1 || offset === 0) {
    navbar.classList.remove("scroll");
  }
});
