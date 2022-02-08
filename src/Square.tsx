import React, {useState} from "react";
import AppProps from "./AppProps";
import './Game.css';


const Square = (props: AppProps): JSX.Element => {
    // const [value, setValue] = useState("")

    return (
        <button className="square" onClick={props.onClick}>
            {props.value}
        </button>
    );
}

export default Square;