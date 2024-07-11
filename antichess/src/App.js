import { useState } from 'react';
import './App.css';
import Board from './components/Board';
import { checkWinner, initialBoardSetup, isValidMove, makeMove } from './utils/boardSetup';

function App() {
  const [board, setBoard] = useState(initialBoardSetup());
  const [turn, setTurn] = useState('white');
  const [selectedPiece, setSelectedPiece] = useState(null);
  const [winner, setWinner] = useState(null);

  const handleMove = (row, col) =>{
    if(winner) return;

    if(selectedPiece){
      const [fromRow, fromCol] = selectedPiece;
      if(isValidMove(board, fromRow, fromCol, row, col, turn)){
        // update board status
        const newBoard = makeMove(board, fromRow, fromCol, row, col);
        setBoard(newBoard);

        // check winner
        const gameWinner = checkWinner(newBoard);
        if(gameWinner){
          setWinner(gameWinner);
        }else{
          setTurn(turn === 'white' ? 'black' : 'white');
        }
        setSelectedPiece(null);
      } else{
        alert('Invalid move');
      }
    }else{
      if (board[row][col] && board[row][col].color === turn) {
        setSelectedPiece([row, col]);
      }
    }
  };


  return (
    <div className="App">
      <h1>Antichess</h1>
      {!winner && <p className='note'>NOTE: White plays first to start the game!</p>}
      { winner && <h2 className='winner'>{winner} wins!</h2>}
      <Board board={board} handleMove={handleMove} />
      <button className='quitBtn' onClick={()=> alert('Player Quit!')}>Quit</button>
      
    </div>
  );
}

export default App;
