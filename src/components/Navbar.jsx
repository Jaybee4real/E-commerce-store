import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <div className="navbar-container">
        <div className="logo">E-Commerce Store</div>
        <div className="links-container">
          <Link className="navbar-item link" to="/home">
            Home
          </Link>
          <Link className="navbar-item link active" to="/shop">
            Shop
          </Link>
          <Link className="navbar-item link" to="/About">
            About
          </Link>
        </div>
        <div className="right-side">
          <i className="navbar-item fa fa-shopping-cart"></i>
          <i className="navbar-item fa fa-search"></i>
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
