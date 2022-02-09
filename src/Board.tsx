import * as React from "react";
import './Game.css'
import Square from "./Square";

interface BoardProps {
    squares: string[];
    player: string;
    handleClick: (i: number) => void;
}

const Board = (props: BoardProps): JSX.Element => {
    const renderSquare = (i: number): JSX.Element => {
        return (
            <Square player={props.squares[i]}
            handleClick={() => props.handleClick(i)}/>
        )
    }

    return (
        <div className="container">
            <div className="board-row d-flex">
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
            </div>
            <div className="board-row d-flex">
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
            </div>
            <div className="board-row d-flex">
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
            </div>
        </div>
    );
}

export default Board;