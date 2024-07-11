import React from 'react'
import Square from './Square';

const Board = ({ board, handleMove }) => {
  // console.log("hey, I'm here!");

  return (
    <div className="board">
      {board.map((row, rowIndex) =>
        row.map((piece, colIndex) => (
          <Square
            key={`${rowIndex}-${colIndex}`}
            colIndex = {colIndex}
            rowIndex= {rowIndex}
            piece={piece}
            onClick={() => handleMove(rowIndex, colIndex)}
          />
        ))
      )}
    </div>
  )
}

export default Board;