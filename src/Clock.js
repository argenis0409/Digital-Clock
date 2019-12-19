import React, { Component } from 'react'

export default class Clock extends Component {
    state = {
       time: new Date()
    }

    ticking() {
      this.setState({
          time: new Date()
      });
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.ticking(), 1000);
    }
  
    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    render() {
        return (
            <div>
                <h1>Clock</h1>
        <h2>It is {this.state.time.toLocaleTimeString()}.</h2>
            </div>
        )
    }
}
