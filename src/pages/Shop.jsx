import React, { Component } from "react";
import Card from "../components/Card";

export default class Shop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }
  componentDidMount() {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        data.forEach((data) => {
          let prev = this.state.items;
          prev.push(data);
          this.setState({
            items: prev,
          });
        });
      });
      console.log(this.state.items)
  }
  render() {
    return (
      <div>
        <div className="header">
          <div className="left-side">
            <h1>
              Get Classy, <br />
              On Purpose
            </h1>
            <div className="btn">Explore</div>
          </div>
          <div className="right-side">
            <div className="image"></div>
          </div>
        </div>

        <div className="products-section section">
          <h1 className="heading">Products</h1>
          <div className="content-container">
            {this.state.items !== []
              ? this.state.items.map((element) => (
                  <Card
                    key={element.id}
                    title={element.title}
                    price={element.price}
                    image={element.image}
                    category={element.category}
                  />
                ))
              : this.state.items === [] (<h1>Loading ...</h1>)}
          </div>
        </div>
      </div>
    );
  }
}
