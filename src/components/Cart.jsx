import React, { Component } from "react";
import Card from "./Card";

export default class Cart extends Component {
  render() {
    return (
      <div className="cart-container">
        {this.props.cartItems.map((item) => {
          <Card
            key={item.id}
            title={
              item.title.length > 68
                ? `${item.title.substring(0, 68)}...`
                : item.title
            }
            price={item.price}
            image={item.image}
            category={item.category}
          />;
        })}
      </div>
    );
  }
}
