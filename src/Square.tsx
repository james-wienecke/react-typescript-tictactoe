import React from "react";
import {AppProps} from "./AppProps";
import './Game.css';


const Square = (props: AppProps): JSX.Element => {
    return (
        <button className="square" onClick={ () => console.log('click', props.value) }>
            {props.value}
        </button>
    );
}

export default Square;