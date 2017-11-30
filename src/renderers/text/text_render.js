import React, { PureComponent } from "react";

class TextRender extends PureComponent {
  render() {
    const { value } = this.props;
    return <div>{value}</div>;
  }
}

export default TextRender;
