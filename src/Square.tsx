import React from "react";
import Button from "react-bootstrap/Button";
import './Game.css';

interface SquareProps {
    handleClick: () => void;
    player: string;
}

const Square = (props: SquareProps): JSX.Element => {
    return (
        <div className="d-flex">
            <button className="square btn btn-outline-dark rounded-0 p-4" onClick={props.handleClick}>
                {props.player ? props.player : String.fromCharCode(0x2007)}
            </button>
        </div>
    );
}

export default Square;