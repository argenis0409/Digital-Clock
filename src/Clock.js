import React, { Component } from 'react'

export default class Clock extends Component {
    state = {
       time: new Date()
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
