import React from "react";
import './Game.css';

interface SquareProps {
    handleClick: () => void;
    player: string;
}

const Square = (props: SquareProps): JSX.Element => {
    return (
        <button className="square" onClick={props.handleClick}>
            {props.player}
        </button>
    );
}

export default Square;