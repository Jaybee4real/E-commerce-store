import React, { Component } from "react";

export default class CartCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quantity: this.props.quantity,
    };
  }

  render() {
    let deleteFromCart = (id) => {
      let cartItems = this.props.cartItems;
      const newCartItems = cartItems.filter((item) => item.id !== id);
      this.props.updateCartItems(newCartItems);
      localStorage.setItem("cart", JSON.stringify(newCartItems));
    };

    let updateQuantity = (type, id) => {
      let cartItems = this.props.cartItems;
      let items = cartItems.find((item) => item.id === id);
      const newCartItems = cartItems.filter((item) => item.id !== id);
      items.quantity = this.state.quantity;
      newCartItems.push(items);
      this.props.updateCartItems(newCartItems);
      if (type === "decrease") {
        if (this.state.quantity === 1) return;
        this.setState({
          qantity: this.state.quantity - 1,
        });
      } else if (type === "increase") {
        this.setState({
          quantity: this.state.quantity + 1,
        });
      }
    };
    return (
      <div className="cart-card-container">
        <img
          src={this.props.image}
          height={this.props.dimension}
          width={this.props.dimension}
          alt=""
        />
        <div className="details-container">
          <div className="title">{this.props.title}</div>
          <div className="price">
            Price: <span>{this.props.price}</span>
          </div>

          <div>
            {this.props.description ? (
              <div className="description">
                <span>Description : </span>
                {this.props.description.substring(0, 200) + "..."}
              </div>
            ) : (
              ""
            )}
          </div>
          <div className="quantity-container">
            Quantity:
            <div
              className="decrease"
              onClick={() => updateQuantity("decrease", this.props.id)}
            >
              -
            </div>
            <input
              type="number"
              value={this.state.quantity}
              onChange={() => {
                updateQuantity();
              }}
              ref={(e) => (this.itemQuantityInput = e)}
            ></input>
            <div
              className="increase"
              onClick={() => updateQuantity("increase", this.props.id)}
            >
              +
            </div>
          </div>
        </div>
        <i
          className="fa fa-trash delete"
          onClick={() => deleteFromCart(this.props.id)}
        ></i>
      </div>
    );
  }
}
