import React, { Component } from 'react';

export default class ColorSelector extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.props.handleClick.bind(this)
  }

  makeColorSwatches = () => (
    ["#F00", "#F80", "#FF0", "#0F0", "#00F", "#508", "#90D", "#FFF", "#000"].map((str, idx) => {
      // return <div key={idx} className="color-swatch"  style={{backgroundColor: str}}/>
      return <div
        key={idx}
        className="color-swatch"
        style={{backgroundColor: str}}
        id={str}
        onClick={this.handleClick.bind(this, str)}
             />
    })
  )

  render() {
    return (
      <div id="colorSelector">
        {this.makeColorSwatches()}
      </div>
    )
  }

}
