import React, { Component } from 'react';
import chromeBoi from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {

  constructor(props) {
    super(props)
    this.state = {color: ""}
    this.handleColorSelection = this.handleColorSelection.bind(this)
  }

  handleColorSelection(color){
    // debugger
    this.setState({color: color})
  }


  genRow = (vals) => (
    vals.map((val, idx) => <Cell key={idx} color={val} newColor={this.state.color} />)
  )

  genMatrix = () => (
    this.props.values.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals)}</div>)
  )

  render() {
    return (
      <div id="app">
        <ColorSelector onColorChange={this.handleColorSelection}/>
        <div id="matrix">
          {this.genMatrix()}
        </div>
      </div>
    )
  }

}

Matrix.defaultProps = {
  values: chromeBoi
}
