import React, {CSSProperties} from "react";
import Button from "react-bootstrap/Button";
import * as CSS from "csstype";
import './Game.css';
import blank from "./assets/blank.svg";
import x from "./assets/X.svg";
import o from "./assets/O.svg";

interface SquareProps {
    handleClick: () => void;
    player: string;
    index: number;
}

const Square = (props: SquareProps): JSX.Element => {
    const getImage = (): string => {
        if (props.player) {
            return props.player === 'X' ? x : o;
        } else {
            return blank;
        }
    }

    const setStyle = (): CSSProperties => {
        const style: CSSProperties = {
            border: "none",
            borderRight: "none",
            borderBottom: "none"
        };
        // if square has another square to its right, it gets a border there
        const hasRightSibling = [0, 1, 3, 4, 6, 7];
        if (hasRightSibling.includes(props.index)) {
            style.borderRight = "1px solid black";
        }
        // if square has another square to its bottom, it gets a border there
        const hasBottomSibling = [0, 1, 2, 3, 4, 5];
        if (hasBottomSibling.includes(props.index)) {
            style.borderBottom = "1px solid black";
        }
        return style;
    }

    return (
        <button className="square p-1" style={setStyle()} onClick={props.handleClick}>
            {/*{props.player ? props.player : String.fromCharCode(0x2007)}*/}
            <img src={getImage()} alt={`${props.player} space #${props.index}`} />
        </button>
    );
}

export default Square;