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
            borderLeft: "thin solid #FFFFFF00",
            borderRight: "thin solid #FFFFFF00",
            borderTop: "thin solid #FFFFFF00",
            borderBottom: "thin solid #FFFFFF00",
        };
        // if square has another square to its left, it gets a border there
        const hasLeftSibling = [1, 2, 4, 5, 7, 8];
        if (hasLeftSibling.includes(props.index)) {
            style.borderLeft = "thin solid #ADADADFF";
        }
        // if square has another square to its right, it gets a border there
        const hasRightSibling = [0, 1, 3, 4, 6, 7];
        if (hasRightSibling.includes(props.index)) {
            style.borderRight = "thin solid #ADADADFF";
        }
        // if square has another square to its top, it gets a border there
        const hasTopSibling = [3, 4, 5, 6, 7, 8];
        if (hasTopSibling.includes(props.index)) {
            style.borderTop = "thin solid #ADADADFF";
        }
        // if square has another square to its bottom, it gets a border there
        const hasBottomSibling = [0, 1, 2, 3, 4, 5];
        if (hasBottomSibling.includes(props.index)) {
            style.borderBottom = "thin solid #ADADADFF";
        }
        return style;
    }

    return (
        <button className="square p-1" style={setStyle()} onClick={props.handleClick}>
            <img src={getImage()} alt={`${props.player} space #${props.index}`} />
        </button>
    );
}

export default Square;