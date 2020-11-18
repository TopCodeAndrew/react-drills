import React, { Component } from 'react'

class Inputs extends Component {
    constructor() {
        super();

        this.state = {
            username: '',
            password: '',
        }
    }

    changeUsername(val) {
        this.setState({
            username: val,
        });
    }

    changePassword(val) {
        this.setState({
            password: val,
        });
    }

    displayAlert() {
        alert(`username is ${this.state.username}, password is ${this.state.password}`)
    }



    render() {
        return (
            <div>
                <input key="user" onChange={e => this.changeUsername(e.target.value)} />
                <input key="pword" onChange={e => this.changePassword(e.target.value)} />
                <button onClick={() => this.displayAlert()} > Alert!</button>
            </div>
        )
    }


}

export default Inputs