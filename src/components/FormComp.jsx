import React, { Component } from "react";

export class FormComp extends Component {
  state = {
    nom: "",
    age: 0
  };

  handleName = event => {
    this.setState({ nom: event.target.value });
  };

  navigate = () => {
    this.props.history.location.push("/url");
  };

  render() {
    return (
      <Fragment>
        <input type="text" onChange={handleName} value={this.state.nom} />
        <button onClick={navigate}>Nav</button>
      </Fragment>
    );
  }
}
