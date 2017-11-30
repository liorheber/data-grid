import React, { PureComponent } from "react";
import Icon from "material-ui/Icon";
import IconButton from "material-ui/IconButton";
import classnames from "classnames";
import { getIconClass } from "kenshoo-shared";

import styles from "./button.scss";

class Sort extends PureComponent {
  getHeaderClass(direction, isSorted) {
    const sortClass =
      isSorted && direction === "asc"
        ? getIconClass("arrowup")
        : getIconClass("arrowdown");
    return classnames(sortClass, styles.header_icon, {
      [styles.active]: isSorted
    });
  }

  render() {
    const { direction, isSorted, className } = this.props;
    return (
      <IconButton
        className={classnames(styles.header_button, className, {
          [styles.active]: isSorted
        })}
      >
        <Icon className={this.getHeaderClass(direction, isSorted)} />
      </IconButton>
    );
  }
}

export default Sort;
