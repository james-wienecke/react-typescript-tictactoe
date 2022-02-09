import * as React from "react";
import './Game.css'
import Square from "./Square";
import Container from "react-bootstrap/Container";

interface BoardProps {
    squares: string[];
    player: string;
    handleClick: (i: number) => void;
}

const Board = (props: BoardProps): JSX.Element => {
    const renderSquare = (i: number): JSX.Element => {
        return (
            <Square
                player={props.squares[i]}
                index={i}
                handleClick={() => props.handleClick(i)}/>
        )
    }

    return (
        <Container fluid className="shadow-sm p-2">
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
        </Container>
    );
}

export default Board;