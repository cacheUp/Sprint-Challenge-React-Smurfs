import React, { useContext } from "react";
import { SmurfPostContext } from "../providers/SmurfPostProvider";
import Smurf from "./Smurf";
import { Link } from "react-router-dom";

function Smurfs() {
  const { smurfData, setSmurfData } = useContext(SmurfPostContext);
  return (
    <div className="Smurfs">
      <h1>Smurf Village</h1>
      <ul>
        {smurfData.map(smurf => {
          return (
            <Link to={`/smurfs/${smurf.id}`}>
              <Smurf
                name={smurf.name}
                id={smurf.id}
                age={smurf.age}
                height={smurf.height}
                key={smurf.id}
              />
            </Link>
          );
        })}
      </ul>
    </div>
  );
}

Smurf.defaultProps = {
  smurfs: []
};

export default Smurfs;
