import React, { Component } from 'react';

export default class Cell extends Component {

  constructor(props) {
    super(props)
    this.state = {
      color: this.props.color
    }
  }

  render() {
    return (
      <div onClick={this.handleClick} className="cell" style={{backgroundColor: this.state.color}}>
      </div>
    )
  }

  handleClick = () => {
    const newColor = this.props.setColor()
    this.setState({
    color: newColor
    })
  }
}
