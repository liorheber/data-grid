// @flow

import React, { PureComponent } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";

import reducers from "./reducers/reducers";
import Sample from "./sample/sample";

type Props = any;

class App extends PureComponent<Props> {
  store: any;

  constructor() {
    super();
    this.store = createStore(reducers, applyMiddleware());
  }
  render() {
    return (
      <Provider store={this.store}>
        <Sample />
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.querySelector(".app-container"));
