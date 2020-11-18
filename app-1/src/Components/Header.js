import React, { Component } from 'react'

export default class Header extends Component {
    constructor(props) {
        super();

        this.state = {
            userInput: ''
        }
    }



    handleChange(val) {
        this.setState({
            userInput: val
        })
    }


    render() {
        return (
            <div>
                <input onChange={(e) => this.handleChange(e.target.value)} />
                <p>{this.state.userInput}</p>
            </div>
        )
    }
}
