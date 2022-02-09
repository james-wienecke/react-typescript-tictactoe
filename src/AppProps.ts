export default interface AppProps {
    value?: number;
    onClick?: (i: number) => void;
    handleClick?: () => void;
    player?: string;
    winner?: string;
    squares?: string[];
}