import * as React from "react";
import './Game.css';

interface StatusProps {
    winner: string;
    player: string;
}

const Status = (props: StatusProps): JSX.Element => {
    return (<span>
        { (props.winner) ? `Winner: ${props.winner}!` :  `Next player: ${props.player}` }
    </span>)
}

export default Status;