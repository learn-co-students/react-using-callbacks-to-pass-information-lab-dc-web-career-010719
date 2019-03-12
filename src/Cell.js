import React, { Component } from 'react';

export default class Cell extends Component {

  constructor(props) {
    super(props)
    this.state = {
      color: this.props.selectedColor
    }
  }

  handleClick = () => {
    this.setState({color: this.props.selectedColor})
    // update to matrix state
  }

  render() {
    return (
      <div className="cell" onClick={this.handleClick} style={{backgroundColor: this.state.color}}>
      </div>
    )
  }

}
