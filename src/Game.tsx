import React, {useEffect, useLayoutEffect, useState} from "react";
import "./Game.css"
import Board from "./Board"
import Status from "./Status";

const Game = (): JSX.Element => {
    // game board history
    const [history, setHistory] = useState([Array(9).fill(null)]);
    // board state at the current point in history
    const [current, setCurrent] = useState(history[history.length - 1]);
    // active player
    const [player, setPlayer] = useState('X');
    // game winner
    const [winner, setWinner] = useState('');

    const addToHistory = (board: string[]): void => {
        const updated = history.slice();
        updated.push(board);
        setHistory(updated);
    }

    const handleClick = (i: number): void => {
        // exit early from the click event if square is already filled or game is over
        if (winner || current[i]) return;

        const selected: string[] = current.slice();
        selected[i] = player;

        // update states
        setCurrent(selected);
        addToHistory(current);

        swapPlayer();
    }

    const swapPlayer = (): void => {
        player === 'X' ? setPlayer('O') : setPlayer('X');
    }

    const checkWinner = (): void => {
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
            if (current[a] && current[a] === current[b] && current[a] === current[c]) {
                setWinner(current[a]);
            }
        }
    }

    // hook to check if a player has won *after* all of Board's dom updates happen
    useLayoutEffect(checkWinner, [history]);

    return (
    <div className="game">
        <div className="game-board">
            <Board player={player} squares={current} handleClick={handleClick} />
        </div>
        <div className="game-info">
            <Status player={player} winner={winner} />
            <ol>{/* To-do */}</ol>
        </div>
    </div>
    );
}

export default Game;