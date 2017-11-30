import React, { PureComponent } from "react";
import ChannelIcon from "./channel_icon";

class ChannelRenderer extends PureComponent {
  render() {
    const { value } = this.props;

    return value ? (
      <ChannelIcon icon={value.icon} toolTip={value.toolTip} />
    ) : null;
  }
}

export default ChannelRenderer;
