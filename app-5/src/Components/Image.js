import React from 'react'

function Image(props) {
    return (
        <div>
            <img src={props.source} alt="doggy teeth" />
        </div>
    )
}

export default Image