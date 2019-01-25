import React, { useContext } from "react";
import { SmurfPostContext } from "./providers/SmurfPostProvider";
import "./App.css";
import SmurfForm from "./components/SmurfForm";
import Smurfs from "./components/Smurfs";
import { Route, NavLink } from "react-router-dom";

function App() {
  const { smurfData, setSmurfData } = useContext(SmurfPostContext);
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  // You'll need to make sure you have the right properties on state and pass them down to props.

  return (
    <div className="App">
      {console.log(smurfData)}
      <div className="nav-links">
        <NavLink className="nav" to="/">
          Home
        </NavLink>
        <NavLink className="nav" exact to="smurf-form">
          Add Smurf
        </NavLink>
      </div>
      <div className="form-cont">
        <Route path="/smurf-form" render={props => <SmurfForm {...props} />} />
      </div>
      <Route exact path="/" component={Smurfs} />
    </div>
  );
}

export default App;
