import React from "react";
import './Game.css'
import Square from "./Square";

export default function Board() {
    const renderSquare = (i: number) => {
        return <Square />
    }

}