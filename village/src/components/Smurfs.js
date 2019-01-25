import React, { useContext } from "react";
import { SmurfPostContext } from "../providers/SmurfPostProvider";
import Smurf from "./Smurf";
import { Link } from "react-router-dom";
import "../App.css";

function Smurfs() {
  const { smurfData, setSmurfData } = useContext(SmurfPostContext);
  return (
    <div className="smurf-cont">
      <h1>Smurf Village</h1>
      <ul>
        {" "}
        <div className="Smurfs">
          {smurfData.map(smurf => {
            return (
              <div className="smurfs-par">
                <Link to={`/smurfs/${smurf.id}`} className="smurf-link">
                  <Smurf
                    name={smurf.name}
                    id={smurf.id}
                    age={smurf.age}
                    height={smurf.height}
                    key={smurf.id}
                  />
                </Link>
              </div>
            );
          })}
        </div>
      </ul>
    </div>
  );
}

Smurf.defaultProps = {
  smurfs: []
};

export default Smurfs;
