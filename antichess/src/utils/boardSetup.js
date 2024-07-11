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
    return true; // replace with actual logic
}

export const makeMove = (board, fromRow, fromCol, toRow, toCol) =>{
    // update the board with the new move
    return board; // replace with actual logic
}