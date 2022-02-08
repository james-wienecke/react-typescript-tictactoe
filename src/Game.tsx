import React from "react";
// import "./Game.css"
import Board from "./Board"
import Square from "./Square"

export default function Game() {
    return (
        <div className="game">
            <div className="game-board">
                <Board />
            </div>
            <div className="game-info">
                <div>{/* status */}</div>
                <ol>{/* To-do */}</ol>
            </div>
        </div>
    );
}