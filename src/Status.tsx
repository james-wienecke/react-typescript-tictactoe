import React from "react";
import AppProps from "./AppProps";
import './Game.css';

const Status = (props: AppProps): JSX.Element => {
    const status = (): string => {
        if (props.winner) return `Winner: ${props.winner}!`
        else return `Next player: ${props.player}`
    }

    return <span>{status()}</span>
}

export default Status;