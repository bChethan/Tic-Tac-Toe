import { useState } from "react";
import Square from "./Square";

const emptyArray = Array(9).fill("\u00A0");

export default function Board(){

    const [squares,setSquares] = useState(Array(9).fill("\u00A0"));
    const [isXNext, setIsXNext] = useState(true);

    function handleClick(i){
        if(squares[i] === "\u00A0" && winner !== ("X"||"O")){
            const nextSquare = squares.slice();
            isXNext ? nextSquare[i] = "X" : nextSquare[i] = "O"
            setIsXNext(!isXNext)
            setSquares(nextSquare)
        }
    }
    const winner = calculateWinner(squares);
    let status;
    if (winner === "X") {
        status = "Winner is X";
    } else if (winner === "O") {
        status = "Winner is O"; 
    } else if (squares.every(sq => sq.trim() !== "")) {
        status = "Game ended in a draw!";
    } else {
        status = "Now " + (isXNext ? "X" : "O") + "'s Turn";
    }
    function reset(){
        setSquares(emptyArray);
        setIsXNext(true);
    }

    return <div>
        <div>{status}</div>
        <div className="board-row">
            <Square value={squares[0]} onSquareClick={()=>handleClick(0)} />
            <Square value={squares[1]} onSquareClick={()=>handleClick(1)} />
            <Square value={squares[2]} onSquareClick={()=>handleClick(2)} />
        </div>
        <div className="board-row">
            <Square value={squares[3]} onSquareClick={()=>handleClick(3)} />
            <Square value={squares[4]} onSquareClick={()=>handleClick(4)} />
            <Square value={squares[5]} onSquareClick={()=>handleClick(5)} />
        </div>
        <div className="board-row">
            <Square value={squares[6]} onSquareClick={()=>handleClick(6)} />
            <Square value={squares[7]} onSquareClick={()=>handleClick(7)} />
            <Square value={squares[8]} onSquareClick={()=>handleClick(8)} />
        </div><br />
        
        <button onClick={reset}>RESET</button>
    </div>
}

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2], // top row
        [3, 4, 5], // middle row
        [6, 7, 8], // bottom row
        [0, 3, 6], // left column
        [1, 4, 7], // middle column
        [2, 5, 8], // right column
        [0, 4, 8], // diagonal top-left to bottom-right
        [2, 4, 6]  // diagonal top-right to bottom-left
    ];

    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        // Check if all three squares are not empty and equal
        if (squares[a]!=="\u00A0" && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}