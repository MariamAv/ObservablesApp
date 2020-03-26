import React, { Fragment, Component, useState, useContext } from "react";
import { useHistory } from "react-router-dom";

export const Form = props => {
  const [state, setState] = useState({ nom: "", age: 0 });
  const history = useHistory();

  const handleName = event => {
    setState({ ...state, nom: event.target.value });
  };

  navigate = () => {
    history.location.push("/url");
  };

  return (
    <Fragment>
      <input type="text" onChange={handleName} value={state.nom} />
      <button onClick={navigate}>Nav</button>
    </Fragment>
  );
};
