import React, {useEffect, useLayoutEffect, useState} from "react";
import "./Game.css"
import Board from "./Board"
import Status from "./Status";
import Container from "react-bootstrap/Container";

const Game = (): JSX.Element => {
    // game board history
    const [history, setHistory] = useState([Array(9).fill(null)]);
    // board state at the current point in history
    const [current, setCurrent] = useState(history[history.length - 1]);
    // current move being displayed
    const [step, setStep] = useState(0);
    // active player
    const [player, setPlayer] = useState('X');
    // game winner
    const [winner, setWinner] = useState('');

    const handleClick = (i: number): void => {
        // exit early from the click event if square is already filled or game is over
        if (winner || current[i]) return;

        const past: string[][] = history.slice(0, step + 1);
        const selected: string[] = past[past.length - 1].slice();
        selected[i] = player;

        // update states
        setCurrent(selected);
        past.push(selected);
        setHistory(past);
        setStep(history.length);

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
    useLayoutEffect(checkWinner, [current]);

    const moves: JSX.Element[] = history.map((step, move) => {
        const label = move ? 'Go to move #' + move : "Go to game start";
        return (
            <li key={move}>
                <button onClick={() => jumpTo(move)}>{label}</button>
            </li>
        );
    });

    const jumpTo = (i: number): void => {
        setPlayer(i % 2 ? 'O' : 'X');
        setStep(i);
        setCurrent(history[i]);
    }

    return (
    <Container className="game row mx-auto">
        <Container className="game-board mx-auto my-4 col">
            <Board player={player} squares={current} handleClick={handleClick} />
        </Container>
        <Container className="game-info col">
            <Status player={player} winner={winner} step={step}/>
            <ol>{moves}</ol>
        </Container>
    </Container>
    );
}

export default Game;