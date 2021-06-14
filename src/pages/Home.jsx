import React, { Component } from "react";
import Card from "../components/Card";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shopItems: [],
      loading: true,
    };
  }

  componentDidMount() {
    if (this.state.shopItems.length === 0) {
      fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((data) => {
          data.forEach((data) => {
            let prev = this.state.shopItems;
            prev.push(data);
            this.setState({
              shopItems: prev,
              loading: false,
            });
          });
        });
    }
  }

  renderCards(arg) {
    let shopItems = this.state.shopItems.filter(
      (item) => item.category === arg
    );
    return this.state.loading === false ? (
      <OwlCarousel
        className="owl-theme"
        loop={true}
        center={true}
        margin={50}
        dots={false}
        nav={false}
        height={260}
        autoplay={true}
        responsive={{
          0: {
            items: 1,
          },
          450: {
            items: 2,
          },
          600: {
            items: 3,
          },
          1000: {
            items: 4,
          },
        }}
      >
        {shopItems.map((item) => (
          <Card
            key={item.id}
            title={item.title}
            id={item.id}
            price={item.price}
            image={item.image}
            category={item.category}
            cartItems={this.props.cartItems}
            updateCartItems={this.props.updateCartItems}
            description={item.description}
          />
        ))}
      </OwlCarousel>
    ) : (
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        // xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="25 25 50 50"
        style={{ width: "110px", height: "auto", marginTop: "10rem" }}
      >
        <circle
          cx="50"
          cy="50"
          r="20"
          fill="none"
          strokeWidth="3"
          stroke="#175a71"
          strokeLinecap="round"
          strokeDashoffset="0"
          strokeDasharray="100, 200"
        >
          <animateTransform
            attributeName="transform"
            attributeType="XML"
            type="rotate"
            from="0 50 50"
            to="360 50 50"
            dur="2.5s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="stroke-dashoffset"
            values="0;-30;-124"
            dur="1.25s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="stroke-dasharray"
            values="0,200;110,200;110,200"
            dur="1.25s"
            repeatCount="indefinite"
          />
        </circle>
      </svg>
    );
  }
  render() {
    /////////////////////
    return (
      <div
        className={`page-container ${this.props.cartOpen ? "cart-active" : ""}`}
      >
        <div
          className="header alternate"
          style={{ backgroundColor: " #a87742" }}
        >
          <div className="left-side">
            <h1>
              Be a Dapper, <br />
              Consciously
            </h1>
            <div className="btn">Explore</div>
          </div>
          <div className="right-side">
            <div className="image image-2"></div>
          </div>
        </div>
        <div className="new-arrivals section">
          <div className="heading">New Arrivals</div>
          <p className="subheading">
            We just recieved new arrivals,selcted by some of the best designers
            in the world, check them out!
          </p>

          <div className="grid-section">
            <div className="item first full-height">
              <img src="/img/first.jpg" alt="first"></img>
              <div className="caption">
                <h2>Elegant Suits</h2>
                <p>From classic and vintage to modern wears</p>
                <div className="cta">
                  View all<i className="fa fa-long-arrow-right"></i>
                </div>
              </div>
            </div>
            <div className="item second half-height">
              <img src="/img/third.jpg" alt="second"></img>
              <div className="caption">
                <h2>Fabulous Jewelery</h2>
                <p>The best jewelry from around the world</p>
                <div className="cta">
                  View all<i className="fa fa-long-arrow-right"></i>
                </div>
              </div>
            </div>
            <div className="item half-height third">
              <img src="/img/fourth.jpg" alt="fourth"></img>
              <div className="caption">
                <h2>Ladies Accessories</h2>
                <p>Shoes, bags, purses, all available</p>
                <div className="cta">
                  View all<i className="fa fa-long-arrow-right"></i>
                </div>
              </div>
            </div>
            <div className="item full-height fourth">
              <img src="/img/second.jpg" alt="third"></img>
              <div className="caption">
                <h2>Elegant Suits</h2>
                <p>From classic and vintage to modern wears</p>
                <div className="cta">
                  View all<i className="fa fa-long-arrow-right"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section">
          <div className="heading">Popular Mens Clothing</div>
          <p className="subheading">
            Our latest mens collections have been crafted by some of the best
            clothing designers in the world
          </p>
          <div className="content-container">
            {this.renderCards("men's clothing")}
          </div>
        </div>
        {/* ///// */}

        <div className="full-width">
          <div className="caption">
            <div className="heading">70% Off</div>
            <p>
              Take advantage of our brand new bonus offer of 70% off on all
              women clothing,Valid for 30 days{" "}
            </p>
            <div className="button">
              Shop Now <i className="fal fa-long-arrow-right"></i>{" "}
            </div>
          </div>
        </div>

        {/* //// */}
        <div className="section">
          <div className="heading">Our Latest Women Jewelery Collection</div>
          <p className="subheading">
            Our elegant jewelery collection has always been loved by our
            customer, new stocks just in, just for you
          </p>
          <div className="content-container">
            {this.renderCards("jewelery")}
          </div>
        </div>
        {/* //// */}

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
