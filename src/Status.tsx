import * as React from "react";
import './Game.css';

interface StatusProps {
    winner: string;
    player: string;
    step: number;
}

const Status = (props: StatusProps): JSX.Element => {
    const getStatus = (): string => {
        if (props.step > 8 && !props.winner) return `Draw game`;
        else return (props.winner) ? `Winner: ${props.winner}!` :  `Next player: ${props.player}`;
    }

    return (<span className="col-12 col-md-6">
        {getStatus()}
    </span>);
}

export default Status;