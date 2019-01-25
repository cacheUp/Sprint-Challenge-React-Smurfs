import React, { useState, useContext } from "react";
import axios from "axios";
import { SmurfPostContext } from "../providers/SmurfPostProvider";

function SmurfForm() {
  const { smurfData, setSmurfData } = useContext(SmurfPostContext);
  const baseUrl = "http://localhost:3333";

  const addSmurf = () => {
    axios
      .post(`${baseUrl}/smurfs`, {
        name: smurfName,
        age: smurfAge,
        height: smurfHeight,
        id: Date.now()
      })
      .then(res => {
        setSmurfData(res.data);
        setSmurfAge("");
        setSmurfHeight("");
        setSmurfName("");
      })
      .catch(err => console.log(err));
  };
  const [smurfName, setSmurfName] = useState("");
  const [smurfAge, setSmurfAge] = useState("");
  const [smurfHeight, setSmurfHeight] = useState("");

  const handleInputChange = e => {
    switch (e.target.name) {
      case "smurfName":
        setSmurfName(e.target.value);
        break;
      case "smurfAge":
        setSmurfAge(e.target.value);
        break;
      case "smurfHeight":
        setSmurfHeight(e.target.value);
        break;
    }
  };

  return (
    <div className="SmurfForm">
      <form onSubmit={addSmurf}>
        <input
          onChange={handleInputChange}
          placeholder="enter the smurf's name"
          value={smurfName}
          name="smurfName"
        />
        <input
          onChange={handleInputChange}
          placeholder="enter the smurf's age"
          value={smurfAge}
          name="smurfAge"
        />
        <input
          onChange={handleInputChange}
          placeholder="enter the smurf's height"
          value={smurfHeight}
          name="smurfHeight"
        />
        <button type="submit">Add to the village</button>
      </form>
    </div>
  );
}

export default SmurfForm;
