import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./styles/sidebar.scss";

export default class Sidebar extends Component {
  render() {
    return (
      <div
        className={`sidebar-container ${
          this.props.sidebarActive ? "active" : " "
        }`}
      >
        <div className="logo">
          E-commerce Store <br />
          <span>...the best prices</span>
        </div>
        <i
          className="fal fa-times"
          onClick={() => this.props.toggleSidebar()}
        ></i>
        <div className="links-container">
          <Link
            className={`sidebar-item link ${
              this.props.activeScreen === "home" ? "active" : " "
            }`}
            to="/home"
            onClick={() => {
              this.props.updateActiveScreen("home");
              this.props.toggleSidebar();
            }}
          >
            <i className="fa fa-home"></i>
            Home
          </Link>
          <Link
            className={`sidebar-item link ${
              this.props.activeScreen === "shop" ? "active" : " "
            }`}
            to="/shop"
            onClick={() => {
              this.props.updateActiveScreen("shop");
              this.props.toggleSidebar();
            }}
          >
            <i className="fa fa-shopping-cart"></i>
            Shop
          </Link>
          <Link
            className={`sidebar-item link ${
              this.props.activeScreen === "about" ? "active" : " "
            }`}
            to="/about"
            onClick={() => {
              this.props.updateActiveScreen("about");
              this.props.toggleSidebar();
            }}
          >
            <i className="fa fa-question-circle"></i>
            About
          </Link>
        </div>
      </div>
    );
  }
}
