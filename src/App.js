import { Route, Switch, Redirect } from "react-router-dom";
import { BrowserRouter as Router } from 'react-router-dom';
import Home from "./pages/Home"
import Shop from "./pages/Shop";
import React, { Component } from 'react'


////components//
import Navbar from "./components/Navbar";


////style////
import "./styles/styles.scss"
import Cart from "./components/Cart";


export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cartItems: [],
      cartOpen: false,
    }
  }
  render() {
    let updateCartOpenState = () => {
      this.setState({
        cartOpen: !this.state.cartOpen,
      })
    }

    return (
      <Router>
        <Navbar cartItems={this.state.cartItems} cartOpen={this.state.cartOpen} updateCartOpenState={updateCartOpenState} />
        <Switch>
          <Route exact path="/shop"
            render={(props) => <Shop {...props} cartOpen={this.state.cartOpen} />}
          ></Route>
          <Route exact path="/home" component={Home}></Route>
          <Route exact path="/">
            <Redirect to="/shop"></Redirect>
          </Route>
        </Switch>
        <Cart cartItems={this.state.cartItems} />
      </Router>
    );
  }
}

