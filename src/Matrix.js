import React, { Component } from 'react';
import chromeBoi from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {

  constructor() {
    super()
    this.state = {
      pickedColor: '#FFF'
    }
  }

  genRow = (vals) => (
    vals.map((val, idx) => <Cell setColor={this.setColor} key={idx} color={val} />)
  )

  genMatrix = () => (
    this.props.values.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals)}</div>)
  )

  colorSwapFunc = (hexStr) => {
    this.setState({
      pickedColor: hexStr
    }
    )
  }

  setColor = () => (this.state.pickedColor)

  render() {
    return (
      <div id="app">
        <ColorSelector colorSwapFunc={this.colorSwapFunc}/>
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
