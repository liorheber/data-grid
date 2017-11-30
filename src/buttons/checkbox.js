import React, { PureComponent } from "react";
import MaterialCheckbox from "material-ui/Checkbox";
import classnames from "classnames";
import { getIconClass } from "kenshoo-shared";

import styles from "./button.scss";

class Checkbox extends PureComponent {
  render() {
    const { onClick, checked, indeterminate } = this.props;
    return (
      <MaterialCheckbox
        onClick={onClick}
        checked={checked}
        indeterminate={indeterminate}
        className={classnames(styles.header_button, styles.with_margin)}
      />
    );
  }
}

export default Checkbox;
