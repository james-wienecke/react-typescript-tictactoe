import React from "react";
import './Game.css';

type AppProps = {
    value: number;
}

const Square = (props: AppProps): JSX.Element => {
    return (
        <button className="square" onClick={ () => console.log('click', props.value) }>
            {props.value}
        </button>
    );
}

export default Square;