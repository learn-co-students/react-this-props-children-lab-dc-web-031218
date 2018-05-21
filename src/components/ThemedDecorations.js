// Code ThemedDecoration Component Here
import React from "react";

export default class ThemedDecoration extends React.Component {
  render() {
    const childLis = React.Children.map(this.props.children, decoration => {
      return <li className={this.props.theme}>{decoration}</li>;
    });
    return <ul>{childLis}</ul>;
  }
}
