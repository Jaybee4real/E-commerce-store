import { Route, Switch, Redirect } from "react-router-dom";
import { BrowserRouter as Router } from 'react-router-dom';
import Home from "./pages/Home"
import Shop from "./pages/Shop";

////components//
import Navbar from "./components/Navbar";


////style////
import "./styles/styles.scss"


function App() {
  return (
    <Router>
    <Navbar />
      <Switch>
        <Route exact path="/shop" component={Shop}></Route>
        <Route exact path="/home" component={Home}></Route>
        <Route exact path="/">
          <Redirect to="/shop"></Redirect>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
