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
   


    return (
      <div id="back" >
        
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
          style="margin:20px"
          data={[
            {x: 1, y: 10},
            {x: 2, y: 5},
            {x: 3, y: 15},
            {x: 7, y: 8}
          ]}
          onPointHover={ this.handlePointHover }
          nogrid
        />
      </div>
    )
  }
}

//        <LineChart data={this.createFakeData()} color={'#F44336'}  />
