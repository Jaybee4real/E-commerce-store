import React, { Component } from "react";
import "./styles/footer.scss";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer-container">
        <div className="inner">
          <div className="row">
            <div className="logo">E-commerce Store</div>
            <div className="address footer-item">
              No 9, Fake Adress, Fade, Nigeria
            </div>
            <div className="address footer-item">
              Tel: <span>+2348143497066</span>
            </div>
            <div className="address footer-item">
              Email: <span>okorojijaybee1@gmail.com</span>
            </div>
            <div className="socials-container">
              <i className="fa fa-twitter"></i>
              <i className="fa fa-instagram"></i>
              <i className="fa fa-facebook-f"></i>
              <i className="fa fa-linkedin"></i>
            </div>
          </div>
          <div className="row">
            <div className="footer-heading">Categories</div>
            <div className="footer-link">Mens Clothing</div>
            <div className="footer-link">Jewelery</div>
            <div className="footer-link">Electronics</div>
            <div className="footer-link">Womens Clothing</div>
          </div>

          <div className="row">
            <div className="footer-heading">Company</div>
            <div className="footer-link">About</div>
            <div className="footer-link">Contact</div>
            <div className="footer-link">Store Locations</div>
            <div className="footer-link">Other</div>
          </div>

          <div className="row">
            <div className="footer-heading">Important Links</div>
            <div className="footer-link">Policy</div>
            <div className="footer-link">Shipping and Delivery</div>
            <div className="footer-link">Careers</div>
            <div className="footer-link">Terms And Conditions</div>
          </div>
        </div>
      </div>
    );
  }
}
