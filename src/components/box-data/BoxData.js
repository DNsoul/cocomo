import React from 'react';

const BoxData = (props) => {
    const {num, desc} = props;

    return (
        <button style={{margin: 5}} className="btn btn-primary boxData">
            <span>{num.toFixed(2)}</span>
            <span>{desc}</span>
        </button> 
    );
}

export default BoxData;