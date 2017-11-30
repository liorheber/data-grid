import React, { PureComponent } from "react";
import Icon from "material-ui/Icon";
import IconButton from "material-ui/IconButton";
import classnames from "classnames";
import { getIconClass } from "kenshoo-shared";

import styles from "./button.scss";

class Filter extends PureComponent {
  render() {
    const { className, onClick, isOpen } = this.props;
    return (
      <IconButton
        className={classnames(styles.header_button, className, {
          [styles.active]: isOpen
        })}
        onClick={onClick}
      >
        <Icon
          className={classnames(
            getIconClass("smoothfilter"),
            styles.header_icon,
            { [styles.active]: isOpen }
          )}
        />
      </IconButton>
    );
  }
}

export default Filter;
