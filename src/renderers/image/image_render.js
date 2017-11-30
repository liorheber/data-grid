import React, { PureComponent } from "react";

import styles from "./image_render.scss";

export class ImageRenderer extends PureComponent {
  render() {
    const { value = {} } = this.props;
    return (
      <div className={styles.image_wrapper}>
        <img src={value} className={styles.image} />
      </div>
    );
  }
}

export default ImageRenderer;
