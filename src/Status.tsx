import * as React from "react";
import './Game.css';

interface StatusProps {
    winner: string;
    player: string;
}

const Status = (props: StatusProps): JSX.Element => {
    const status = (): string => {
        if (props.winner) return `Winner: ${props.winner}!`
        else return `Next player: ${props.player}`
    }

    return <span>{ status() }</span>
}

export default Status;