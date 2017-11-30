import React, { PureComponent } from "react";
import icons from "./channel_icon.scss";

export default class ChannelIcon extends PureComponent {
  getIcon(id) {
    return icons[`channel-${id.toLowerCase()}`];
  }

  render() {
    const { toolTip, icon } = this.props;

    return (
      <span title={toolTip}>
        <img className={this.getIcon(icon)} />
      </span>
    );
  }
}

ChannelIcon.defaultProps = {
  icon: "google"
};
