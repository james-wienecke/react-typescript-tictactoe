import React, {CSSProperties} from "react";
import Button from "react-bootstrap/Button";
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

        return
    }

    return (
        <button className="square p-1" style={setStyle()} onClick={props.handleClick}>
            {/*{props.player ? props.player : String.fromCharCode(0x2007)}*/}
            <img src={getImage()} alt={`${props.player} space`} />
        </button>
    );
}

export default Square;