import React, { PureComponent } from "react";
import Icon from "material-ui/Icon";
import IconButton from "material-ui/IconButton";
import classnames from "classnames";
import { getIconClass } from "kenshoo-shared";

import styles from "./button.scss";

class Compare extends PureComponent {
  render() {
    const { onClick, isCompared, className } = this.props;
    return (
      <IconButton
        onClick={onClick}
        className={classnames(styles.header_button, className)}
      >
        <Icon
          className={classnames(
            styles.header_icon,
            getIconClass(isCompared ? "collapse" : "expand")
          )}
        />
      </IconButton>
    );
  }
}

export default Compare;
