import { Route, Switch, Redirect } from "react-router-dom";
import { BrowserRouter as Router } from 'react-router-dom';
import Home from "./pages/Home"
import Shop from "./pages/Shop";
import React, { Component } from 'react'


////components//
import Navbar from "./components/Navbar";
import CartComponent from "./components/CartComponent";

import Checkout from "./pages/Checkout";

////style////
import "./styles/styles.scss"
import About from "./pages/About";


export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cartItems: JSON.parse(localStorage.getItem("cart")),
      cartOpen: false,
    }
  }
  render() {
    let updateCartOpenState = () => {
      this.setState({
        cartOpen: !this.state.cartOpen,
      })
    }

    let updateCartItems = (newState) => {
      this.setState({
        cartItems: newState,
      })
      localStorage.setItem("cart", JSON.stringify(this.state.cartItems))
    }

    return (
      <Router>
        <Navbar cartItems={this.state.cartItems} cartOpen={this.state.cartOpen} updateCartOpenState={updateCartOpenState} />
        <Switch>
          <Route exact path="/shop"
            render={(props) => <Shop {...props}
              cartOpen={this.state.cartOpen}
              updateCartItems={updateCartItems}
              cartItems={this.state.cartItems} />}
          ></Route>
          <Route exact path="/checkout"
            render={(props) => <Checkout {...props}
              updateCartItems={updateCartItems}
              cartItems={this.state.cartItems} />}
          ></Route>
          <Route exact path="/home" component={Home}></Route>
          <Route exact path="/about" component={About}></Route>
          <Route exact path="/">
            <Redirect to="/shop"></Redirect>
          </Route>
        </Switch>
        <CartComponent
          cartItems={this.state.cartItems}
          updateCartItems={updateCartItems}
          cartOpen={this.state.cartOpen}
          updateCartOpenState={updateCartOpenState} />
      </Router>
    );
  }
}

