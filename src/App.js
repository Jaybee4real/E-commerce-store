import { Route, Switch } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import React, { Component } from "react";

////components/////
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import CartComponent from "./components/CartComponent";

import Checkout from "./pages/Checkout";

////style////
import "./index.scss";
import About from "./pages/About";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItems: JSON.parse(localStorage.getItem("cart")),
      cartOpen: false,
      activeScreen:
        window.location.pathname.split("/")[1].toString() === ""
          ? "home"
          : window.location.pathname.split("/")[1].toString(),
      sidebarActive: false,
    };
  }
  render() {
    let updateCartOpenState = () => {
      this.setState({
        cartOpen: !this.state.cartOpen,
      });
    };

    let updateCartItems = (newState) => {
      this.setState({
        cartItems: newState,
      });
      localStorage.setItem("cart", JSON.stringify(newState));
    };

    let updateActiveScreen = (newScreen) => {
      this.setState({
        activeScreen: newScreen,
      });
    };

    let toggleSidebar = () => {
      this.setState({
        sidebarActive: !this.state.sidebarActive,
      });
    };

    return (
      <div
        style={{ overflow: "scroll" }}
        className={this.state.activeScreen.toString()}
      >
        <Router>
          <Navbar
            {...this.state}
            toggleSidebar={toggleSidebar}
            updateActiveScreen={updateActiveScreen}
            updateCartOpenState={updateCartOpenState}
          />
          <Sidebar
            {...this.state}
            updateActiveScreen={updateActiveScreen}
            toggleSidebar={toggleSidebar}
          />
          <Switch>
            <Route
              exact
              path="/shop"
              render={(props) => (
                <Shop
                  {...props}
                  updateCartItems={updateCartItems}
                  {...this.state}
                />
              )}
            ></Route>
            <Route
              exact
              path="/checkout"
              render={(props) => (
                <Checkout
                  {...props}
                  {...this.state}
                  updateCartItems={updateCartItems}
                  updateActiveScreen={updateActiveScreen}
                />
              )}
            ></Route>
            <Route
              exact
              path="/about"
              render={(props) => <About {...props} {...this.state} />}
            ></Route>
            <Route
              exact
              path="/"
              render={(props) => (
                <Home
                  {...props}
                  {...this.state}
                  updateCartItems={updateCartItems}
                />
              )}
            ></Route>
          </Switch>
          <CartComponent
            {...this.state}
            updateCartItems={updateCartItems}
            updateCartOpenState={updateCartOpenState}
            updateActiveScreen={updateActiveScreen}
          />
        </Router>
      </div>
    );
  }
}
