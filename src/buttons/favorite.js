import React, { PureComponent } from "react";
import Icon from "material-ui/Icon";
import IconButton from "material-ui/IconButton";
import classnames from "classnames";
import { getIconClass } from "kenshoo-shared";

import styles from "./button.scss";

class Favorite extends PureComponent {
  render() {
    const { onClick, selected } = this.props;
    return (
      <IconButton onClick={onClick} className={styles.header_button}>
        <Icon
          className={classnames(
            styles.constant_button,
            styles.large_icon,
            getIconClass(selected ? "star" : "staro")
          )}
        />
      </IconButton>
    );
  }
}

export default Favorite;
