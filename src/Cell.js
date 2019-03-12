import React, { Component } from 'react';

export default class Cell extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: this.props.color
    };
  }

  changeCellColor = () => {
    this.setState({
      color: this.props.selectedColor
    })
  }

  render() {
    return (
      <div
        className="cell"
        onClick={this.changeCellColor}
        style={{ backgroundColor: this.state.color}}
      />
    );
  }
}
