import { useState } from "react";
import { Square } from "./Square";
import "../App.scss";

function GameBoard({ ...props }) {
  const initialData = [
    "d",
    "d",
    "d",
    "d",
    "d",
    "d",
    null,
    null,
    null,
    "d",
    "d",
    null,
    null,
    null,
    "d",
    "d",
    null,
    null,
    null,
    "d",
    "d",
    "d",
    "d",
    "d",
    "d",
  ];
  const [squares, setSquared] = useState(initialData);
  const [isX, setIsX] = useState(true);
  const handleClick = (i: number) => {
    const arr = squares.slice();
    if (calculateWinner(arr) || arr[i]) {
      return;
    }
    arr[i] = isX ? "X" : "O";
    setSquared(arr);
    setIsX(!isX);
  };

  function calculateWinner(squares: Array<string | null>) {
    const lines = [
      [0, 6, 12],
      [1, 6, 11],
      [1, 7, 13],
      [2, 7, 12],
      [3, 7, 11],
      [3, 8, 13],
      [4, 8, 12],
      [5, 6, 7],
      [5, 11, 17],
      [6, 7, 8],
      [6, 11, 16],
      [6, 12, 18],
      [7, 8, 9],
      [7, 13, 19],
      [7, 11, 15],
      [7, 12, 17],
      [8, 12, 16],
      [8, 13, 18],
      [9, 13, 17],
      [10, 11, 12],
      [11, 12, 13],
      [11, 16, 21],
      [12, 13, 14],
      [11, 17, 23],
      [12, 16, 20],
      [12, 17, 22],
      [12, 18, 24],
      [13, 17, 21],
      [13, 18, 23],
      [16, 17, 18],
      [15, 16, 17],
      [17, 18, 19],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      } else if (squares[a] && squares[b] && squares[a] === squares[b]) {
        const diff = b - a;
        const arr = squares;
        if (arr[a - diff] === "d") {
          arr[a - diff] = null;
          setSquared(arr);
        }
      } else if (squares[b] && squares[c] && squares[b] === squares[c]) {
        const diff = c - b;
        const arr = squares;
        if (arr[c + diff] === "d") {
          arr[c + diff] = null;
          setSquared(arr);
        }
      }
    }
    return null;
  }

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (isX ? "X" : "O");
  }

  const handleReset = () => {
    setSquared(initialData);
    setIsX(true);
  };

  return (
    <div className={`game${props.isDark ? "_dark" : ""}`}>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square
          value={squares[0]}
          onClick={() => handleClick(0)}
          isDummy={true}
          {...props}
        />
        <Square
          value={squares[1]}
          onClick={() => handleClick(1)}
          isDummy={true}
          {...props}
        />
        <Square
          value={squares[2]}
          onClick={() => handleClick(2)}
          isDummy={true}
          {...props}
        />
        <Square
          value={squares[3]}
          onClick={() => handleClick(3)}
          isDummy={true}
          {...props}
        />
        <Square
          value={squares[4]}
          onClick={() => handleClick(4)}
          isDummy={true}
          {...props}
        />
      </div>
      <div className="board-row">
        <Square
          value={squares[5]}
          onClick={() => handleClick(5)}
          isDummy={true}
          {...props}
        />
        <Square value={squares[6]} onClick={() => handleClick(6)} {...props} />
        <Square value={squares[7]} onClick={() => handleClick(7)} {...props} />
        <Square value={squares[8]} onClick={() => handleClick(8)} {...props} />
        <Square
          value={squares[9]}
          onClick={() => handleClick(9)}
          isDummy={true}
          {...props}
        />
      </div>
      <div className="board-row">
        <Square
          value={squares[10]}
          onClick={() => handleClick(10)}
          isDummy={true}
          {...props}
        />
        <Square
          value={squares[11]}
          onClick={() => handleClick(11)}
          {...props}
        />
        <Square
          value={squares[12]}
          onClick={() => handleClick(12)}
          {...props}
        />
        <Square
          value={squares[13]}
          onClick={() => handleClick(13)}
          {...props}
        />
        <Square
          value={squares[14]}
          onClick={() => handleClick(14)}
          isDummy={true}
          {...props}
        />
      </div>
      <div className="board-row">
        <Square
          value={squares[15]}
          onClick={() => handleClick(15)}
          isDummy={true}
          {...props}
        />
        <Square
          value={squares[16]}
          onClick={() => handleClick(16)}
          {...props}
        />
        <Square
          value={squares[17]}
          onClick={() => handleClick(17)}
          {...props}
        />
        <Square
          value={squares[18]}
          onClick={() => handleClick(18)}
          {...props}
        />
        <Square
          value={squares[19]}
          onClick={() => handleClick(19)}
          isDummy={true}
          {...props}
        />
      </div>
      <div className="board-row">
        <Square
          value={squares[20]}
          onClick={() => handleClick(20)}
          isDummy={true}
          {...props}
        />
        <Square
          value={squares[21]}
          onClick={() => handleClick(21)}
          isDummy={true}
          {...props}
        />
        <Square
          value={squares[22]}
          onClick={() => handleClick(22)}
          isDummy={true}
          {...props}
        />
        <Square
          value={squares[23]}
          onClick={() => handleClick(23)}
          isDummy={true}
          {...props}
        />
        <Square
          value={squares[24]}
          onClick={() => handleClick(24)}
          isDummy={true}
          {...props}
        />
      </div>
      <div>
        <button
          className={`reset${props.isDark ? "_dark" : ""}`}
          onClick={handleReset}
        >
          RESET
        </button>
      </div>
    </div>
  );
}

export default GameBoard;
