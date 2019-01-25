import React, { useContext } from "react";
import { SmurfPostContext } from "../providers/SmurfPostProvider";
import axios from "axios";
import "../App.css";
const Smurf = props => {
  const { smurfData, setSmurfData } = useContext(SmurfPostContext);
  const baseUrl = "http://localhost:3333";

  const deleteSmurf = (e, id) => {
    e.preventDefault();
    axios
      .delete(`${baseUrl}/smurfs/${id}`)
      .then(res => {
        setSmurfData(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div className="smurf">
      <h3>{props.name}</h3>
      <p>{props.height} tall</p>
      <p>{props.age} smurf years old</p>
      <button onClick={e => deleteSmurf(e, props.id)}>Delete</button>
    </div>
  );
};

export default Smurf;
