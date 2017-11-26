import React, { Component } from 'react';
import '../styling/linegraph.css';
//import LineChart from './linechart';
import LineChart from 'react-svg-line-chart'
import Tooltip from 'react-simple-tooltip'

export default class MyComponent extends Component {
  constructor(props, context) {
    super(props, context)

    this.state = {
      activePoint: null,
      tooltipTrigger: null,
    }
  }

  /*handlePointHover(point, trigger) {
    this.setState({
      activePoint: point,
      tooltipTrigger: trigger,
    })
  }*/

  render() {
    const data = []

    for (let x = 1; x <= 30; x++) {
      data.push({ x: x, y: Math.floor(Math.random() * (40)) })
    }

    return (
      <div>
        
        { this.state.tooltipTrigger
          ? (
            <Tooltip placement="top" trigger={ this.state.tooltipTrigger }>
              <div>y : { this.state.activePoint.y }</div>
              <div>x : { this.state.activePoint.x }</div>
            </Tooltip>
          )
          : null
        }

        <LineChart
          activePoint={ this.state.activePoint }
          data={ data }
          onPointHover={ this.handlePointHover }
          nogrid
        />
      </div>
    )
  }
}

//        <LineChart data={this.createFakeData()} color={'#F44336'}  />
