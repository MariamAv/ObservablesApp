import React, { Component, createContext } from "react";

const monContext = createContext("coucou");

export class FormComp extends Component {
  state = {
    nom: "",
    age: 0
  };

  constructor() {
    super(props);
  }
  componentDidMount() {
    // traitement 1
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.nom !== nextState.nom) {
      return true;
    } else {
      return false;
    }
  }

  componentDidUpdate() {
    // traitement 2
  }

  componentWillUnmount() {
    // traitement 3
  }

  handleName = event => {
    this.setState({ nom: event.target.value });
  };

  navigate = context => {
    console.log(context);
    this.props.history.location.push("/url");
  };

  render() {
    return (
      <monContext.Consumer>
        {value => (
          <Fragment>
            <input type="text" onChange={handleName} value={this.state.nom} />
            <button onClick={() => navigate(data)}>Nav</button>
          </Fragment>
        )}
      </monContext.Consumer>
    );
  }
}
