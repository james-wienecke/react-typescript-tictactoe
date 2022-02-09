import React, {useEffect, useState} from "react";
import "./Game.css"
import Board from "./Board"
import Status from "./Status";

const Game = (): JSX.Element => {
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [current, setCurrent] = useState(history[history.length - 1]);

    const [player, setPlayer] = useState('X');
    const [winner, setWinner] = useState('');


    const addToHistory = (board: string[]) => {
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
        const squares = current;
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
                setWinner(squares[a]);
            }
        }
    }

    const status = (): JSX.Element => {
        let text: string;
        if (winner)
            text = `Winner: ${winner}!`;
        else
            text = `Next player: ${player}`;
        return <span>{text}</span>;
    }

    // hook to check if a player has won *after* all of Board's dom updates happen
    useEffect(checkWinner);


    return (
    <div className="game">
        <div className="game-board">
            <Board player={player} squares={current} onClick={handleClick} />
        </div>
        <div className="game-info">
            <Status player={player} winner={winner} />
            <ol>{/* To-do */}</ol>
        </div>
    </div>
    );
}

export default Game;