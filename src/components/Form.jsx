import React, { Fragment, Component, useState, useContext } from "react";
import { useHistory } from "react-router-dom";

const monContext = createContext("coucou");

export const Form = props => {
  const [state, setState] = useState({ nom: "", age: 0 });
  const history = useHistory();
  const context = useContext(monContext);

  //componentDidMount
  useEffect(() => {
    // traitement 1
  }, []);

  //componentWillUnmount
  useEffect(() => {
    return () => {
      //traitement 3
    };
  }, []);

  //componentDidMount + componentWillUnmount
  useEffect(() => {
    // traitement 1
    let subscr = observable.subscribe();
    return () => {
      subscr.unsubscribe();
    };
  }, []);

  // componentDidUpdate
  useEffect(() => {
    //traitement 2
  });

  // componentDidUpdate + shouldComponentUpdate
  useEffect(() => {
    //traitement 2
  }, [state.nom]); // ou [setState] ou [state.nom, state.age]

  const handleName = event => {
    setState({ ...state, nom: event.target.value });
  };

  navigate = () => {
    console.log(context);
    history.location.push("/url");
  };

  return (
    <Fragment>
      <input type="text" onChange={handleName} value={state.nom} />
      <button onClick={navigate}>Nav</button>
    </Fragment>
  );
};
