import * as React from "react";
import AppProps from "./AppProps";
import './Game.css'
import Square from "./Square";
import {useState} from "react";

const Board = (): JSX.Element => {
    const [squares, setSquares] = useState(Array(9).fill(null));

    const renderSquare = (i: number) => {
        return <Square
            value={squares[i]}
            onClick={() => handleClick(i)}/>
    }

    const handleClick = (i: number): void => {
        const selected: string[] = squares.slice();
        selected[i] = 'X';
        setSquares(selected);
    }

    const status: string = "Next player: X";

    return (
        <div>
            <div className="status">{status}</div>
            <div className="board-row">
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div className="board-row">
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div className="board-row">
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
        </div>
    );

}

export default Board;