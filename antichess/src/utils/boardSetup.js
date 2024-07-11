export const initialBoardSetup = ()=>{
    // Initialize the board with pieces
   // Fill in with the initial positions of the pieces

    return [
        [
            { type: 'R', color: 'black' },
            { type: 'N', color: 'black' },
            { type: 'B', color: 'black' },
            { type: 'Q', color: 'black' },
            { type: 'K', color: 'black' },
            { type: 'B', color: 'black' },
            { type: 'N', color: 'black' },
            { type: 'R', color: 'black' }
        ],
        Array(8).fill({ type: 'P', color: 'black' }),
        Array(8).fill(null),
        Array(8).fill(null),
        Array(8).fill(null),
        Array(8).fill(null),
        Array(8).fill({ type: 'P', color: 'white' }),
        [
          { type: 'R', color: 'white' },
          { type: 'N', color: 'white' },
          { type: 'B', color: 'white' },
          { type: 'Q', color: 'white' },
          { type: 'K', color: 'white' },
          { type: 'B', color: 'white' },
          { type: 'N', color: 'white' },
          { type: 'R', color: 'white' }
        ]
      
    ];
};

export const isValidMove = (board, fromRow, fromCol, toRow, toCol, turn ) => {
    // check if the move is valid based on Antichess rules
    const piece = board[fromRow][fromCol];
    if(!piece || piece.color !== turn)
        return false;

    const targetPiece = board[toRow][toCol];
    if(targetPiece && targetPiece.color == turn)
        return false;

    // Add specific movement rules for each piece type (Rook, Knight, Bishop, Queen, King, Pawn)
  // For simplicity, we'll assume any move is valid here. This needs detailed implementation.
    
    return true;
}

export const makeMove = (board, fromRow, fromCol, toRow, toCol) =>{
    // update the board with the new move
    const newBoard = board.map(row => row.map(cell => cell));
    newBoard[toRow][toCol] = newBoard[fromRow][fromCol];
    newBoard[fromRow][fromCol] = null;

    return newBoard; 
}

export const checkWinner = (board) => {
    const whitePieces = board.flat().filter(piece => piece && piece.color === 'white');
    const blackPieces = board.flat().filter(piece => piece && piece.color === 'black');

    if(whitePieces.length === 0) return 'Black';
    if(blackPieces.length === 0) return 'White';

    return null;
}