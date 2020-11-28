import { Route, Switch, Redirect } from "react-router-dom";
import { BrowserRouter as Router } from 'react-router-dom';
import Home from "./pages/Home"
import Shop from "./pages/Shop";
import React, { Component } from 'react'


////components//
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import CartComponent from "./components/CartComponent";

import Checkout from "./pages/Checkout";

////style////
import "./styles/shared_styles.scss"
import About from "./pages/About";


export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cartItems: JSON.parse(localStorage.getItem("cart")),
      cartOpen: false,
      activeScreen: window.location.pathname.split("/")[1].toString(),
      sidebarActive: false
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
      localStorage.setItem("cart", JSON.stringify(newState))
    }

    let updateActiveScreen = (newScreen) => {
      this.setState({
        activeScreen: newScreen,
      })
    }

    let toggleSidebar = () => {
      this.setState({
        sidebarActive: !this.state.sidebarActive
      })
    }

    return (
      <Router>
        <div style={{ overflow: "scroll" }} className={this.state.activeScreen.toString()}>
          <Navbar
            {...this.state}
            toggleSidebar={toggleSidebar}
            updateActiveScreen={updateActiveScreen}
            updateCartOpenState={updateCartOpenState} />
          <Sidebar
            {...this.state}
            updateActiveScreen={updateActiveScreen}
            toggleSidebar={toggleSidebar} />
          <Switch>
            <Route exact path="/shop"
              render={(props) => <Shop {...props}
                updateCartItems={updateCartItems}
                {...this.state} />}
            ></Route>
            <Route exact path="/checkout"
              render={(props) => <Checkout {...props}
                updateCartItems={updateCartItems}
                {...this.state} />}
            ></Route>
            <Route exact path="/home"
              render={(props) => <Home {...props}
                {...this.state} />}
            ></Route>
            <Route exact path="/about"
              render={(props) => <About {...props}
                {...this.state} />}
            ></Route>
            <Route exact path="/">
              <Redirect to="/shop"></Redirect>
            </Route>
          </Switch>
          <CartComponent
            {...this.state}
            updateCartItems={updateCartItems}
            updateCartOpenState={updateCartOpenState} />
        </div>
      </Router>
    );
  }
}

