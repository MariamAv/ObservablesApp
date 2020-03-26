import React, { Fragment, Component } from "react";
import MonService from "../services/MonService";

export class MonComp extends Component {
  _subscription;

  state = {
    canard: ""
  };

  componentDidMount() {
    this._subscription = MonService.obs.subscribe(data =>
      this.setState({ canard: data })
    );
    MonService.getData();
  }

  componentWillUnmount() {
    this._subscription.unsubscribe();
  }

  render() {
    return <Fragment>{this.state.canard}</Fragment>;
  }
}
