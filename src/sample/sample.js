// @flow

import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { startApp } from "../actions/actions";
import type { Action } from "../actions/actions";

import styles from "./sample.scss";

type SampleProps = {
  label: string,
  labelFromStore: string,
  startApp: () => Action
};

export class Sample extends PureComponent<SampleProps> {
  static defaultProps = {
    label: "Default label!"
  };

  render() {
    const { label, labelFromStore } = this.props;
    return (
      <div>
        <div className={styles.sample}>From props: {label}</div>
        <div className={styles.sample}>From state: {labelFromStore}</div>
        <button onClick={this.props.startApp}>Dispatch action</button>
      </div>
    );
  }
}

const mapStateToProps = ({ sampleReducer }) => ({
  labelFromStore: sampleReducer.label
});

export default connect(mapStateToProps, { startApp })(Sample);
