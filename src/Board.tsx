import * as React from "react";
import AppProps from "./AppProps";
import './Game.css'
import Square from "./Square";
import {useState} from "react";

const Board = (): JSX.Element => {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [player, setPlayer] = useState('X');

    const renderSquare = (i: number) => {
        return <Square
            value={squares[i]}
            onClick={() => handleClick(i)}/>
    }

    const handleClick = (i: number): void => {
        const selected: string[] = squares.slice();
        selected[i] = player;
        setSquares(selected);
        swapPlayer();
    }

    const swapPlayer = (): void => {
        player === 'X' ? setPlayer('O') : setPlayer('X');
    }

    const checkWinner = (): string => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return '';
    }

    const status = (): string => {
        const winner: string = checkWinner();
        let text: string;
        if (winner !== '')
            text = `Winner: ${winner}!`;
        else
            text = `Next player: ${player}`;
        return text;
    }

    return (
        <div>
            <div className="status">{status()}</div>
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