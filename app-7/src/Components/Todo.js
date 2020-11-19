import React, { Component } from 'react'

export default class Todo extends Component {
    constructor() {
        super();


        this.state = {}
    }

    render() {
        return (
            <h2>
                {this.props.word}
            </h2>
        )
    }
}