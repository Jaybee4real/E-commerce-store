import React, { Component } from "react";

export default class About extends Component {
  render() {
    return (
      <div
        className={`page-container about ${
          this.props.cartOpen ? "cart-active" : ""
        }`}
      >
        <div className="mini-header">
          <div className="page-title" data-content="About Our Company"></div>
        </div>
        <div className="section">
          <div className="heading">About Us</div>
          <div className="content">
            <div className="left-side">
              <div className="title">
                A Brand That Has Been Built To Perfection Over The Years
              </div>
              <div className="text">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Quisquam molestias veniam sequi ducimus provident sapiente minus
                itaque fugit esse dolorum!
                <br />
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
                dolores fugit repellat autem laboriosam nostrum! Quaerat, autem
                necessitatibus perferendis nisi incidunt eaque ab ipsa eius?
                Libero consectetur praesentium consequuntur necessitatibus.
                <br />
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusamus, eius?
              </div>
            </div>
            <div className="right-side">
              <img src="/img/about_img1.jpg" alt="About1" />
            </div>
          </div>
        </div>

        <div className="section">
          <div className="image-grid">
            <img src="/img/grid-1.jpg" alt="grid1" />
            <img src="/img/grid-2.jpg" alt="grid1" />
            <img src="/img/grid-3.jpg" alt="grid1" />
            <img src="/img/grid-4.jpg" alt="grid1" />
            <img src="/img/grid-5.jpg" alt="grid1" />
            <img src="/img/grid-6.jpg" alt="grid1" />
          </div>
        </div>

        <div className="section">
          <div className="heading">About Us</div>
          <div className="content reverse">
            <div className="left-side">
              <div className="title">
                A Brand That Has Been Built To Perfection Over The Years
              </div>
              <div className="text">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Quisquam molestias veniam sequi ducimus provident sapiente minus
                itaque fugit esse dolorum!
                <br />
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
                dolores fugit repellat autem laboriosam nostrum! Quaerat, autem
                necessitatibus perferendis nisi incidunt eaque ab ipsa eius?
                Libero consectetur praesentium consequuntur necessitatibus.
                <br />
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusamus, eius?
              </div>
            </div>
            <div className="right-side">
              <img src="/img/about_img2.jpg" alt="About1" />
            </div>
          </div>
        </div>

        <div className="newsletter">
          <div className="caption">
            <div className="heading">
              Subscribe to our Newsletter and get 40% off on all products
            </div>
            <div className="input-container">
              <input placeholder="Your Email Address" />
              <div className="button">Subscribe</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
