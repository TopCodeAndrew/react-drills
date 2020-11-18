import React, { Component } from 'react'

/*
1. Create an array
2. Find a way to turn each index in the array into a <h2> element

*/

class List extends Component {
    constructor() {
        super();

        this.state = {
            userInput: '',
            array: ["this", "that", "the other thing", "dog", "cat", "frog"]
        }
    }

    handleChange(val) {
        this.setState({
            userInput: val
        });
        console.log(this.state.userInput)
    }


    render() {
        let input = this.state.userInput;

        return (
            <div>
                <input onChange={e => this.handleChange(e.target.value)} />
                <ul>
                    {this.state.array.filter((element) => element.includes(input)).map((e) => <h2>{e}</h2>)}
                </ul>
            </div>
        )
    }
}


export default List