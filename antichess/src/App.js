import { useState } from 'react';
import './App.css';
import Board from './components/Board';
import { initialBoardSetup, isValidMove, makeMove } from './utils/boardSetup';

function App() {
  const [board, setBoard] = useState(initialBoardSetup());
  const [turn, setTurn] = useState('white');
  const [selectedPiece, setSelectedPiece] = useState(null);

  const handleMove = (row, col) =>{
    if(selectedPiece){
      const [fromRow, fromCol] = selectedPiece;
      if(isValidMove(board, fromRow, fromCol, row, col, turn)){
        setBoard(makeMove(board, fromRow, fromCol, row, col));
        setTurn(turn === 'white' ? 'black' : 'white');
        setSelectedPiece(null);
      } else{
        alert('Invalid move');
      }
    }else{
      setSelectedPiece([row, col]);
    }
  };


  return (
    <div className="App">
      <h1>Antichess</h1>
      <Board board={board} handleMove={handleMove} />
      <button className='quitBtn' onClick={()=> alert('Player Quit!')}>Quit</button>
    </div>
  );
}

export default App;
