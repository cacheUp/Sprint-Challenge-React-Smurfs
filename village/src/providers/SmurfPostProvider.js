import React, { useState, useEffect, createContext } from "react";
import axios from "axios";

export const SmurfPostContext = createContext();

function SmurfPostProvider(props) {
  const [smurfData, setSmurfData] = useState([]);
  const smurfContext = {
    smurfData,
    setSmurfData
  };
  useEffect(
    () => {
      axios
        .get(`http://localhost:3333/smurfs`)
        .then(res => {
          setSmurfData(res.data);
        })
        .catch(err => {
          console.error(err);
        });
    },
    [SmurfPostContext]
  );

  const { children } = props;

  return (
    <SmurfPostContext.Provider value={smurfContext}>
      {console.log(smurfData)}
      {children}
    </SmurfPostContext.Provider>
  );
}

export default SmurfPostProvider;
