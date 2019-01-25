import React, { useState, useEffect, createContext } from "react";
import axios from "axios";

export const smurfPostContext = createContext();

function smurfPostProvider(props) {
  const [smurfData, setsmurfData] = useState([]);
  const smurfContext = {
    smurfData,
    setsmurfData
  };
  useEffect(
    () => {
      axios
        .get(`http://localhost:5000/smurfs`)
        .then(res => {
          setsmurfData(res.data);
        })
        .catch(err => {
          console.error(err);
        });
    },
    [smurfPostContext]
  );

  const { children } = props;

  return (
    <smurfPostContext.Provider value={smurfContext}>
      {children}
    </smurfPostContext.Provider>
  );
}

export default smurfPostProvider;
