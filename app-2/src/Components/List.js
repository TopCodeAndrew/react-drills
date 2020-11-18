import React, { Component } from 'react'

/*
1. Create an array
2. Find a way to turn each index in the array into a <h2> element

*/

class List extends Component {
    constructor() {
        super();

        this.state = {
            array: ["this", "that", "the other thing"]
        }
    }


    render() {

        return (
            <div>
                <ul> {this.state.array.map((e) => <h2>{e}</h2>)} </ul>
            </div>
        )
    }
}


export default List