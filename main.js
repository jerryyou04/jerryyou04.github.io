document.addEventListener("DOMContentLoaded", function() {
    const chessboard = document.getElementById("chessboard");

    // Function to create chessboard squares dynamically
    function createChessboard() {
        for (let row = 0; row < 8; row++) {
            for (let col = 0; col < 8; col++) {
                const square = document.createElement("div");
                square.classList.add("square");
                square.dataset.row = row;
                square.dataset.col = col;
                chessboard.appendChild(square);
            }
        }
    }

    createChessboard();

    // Function to add chess pieces dynamically
    function addChessPiece(piece, row, col) {
        const square = document.querySelector(`.square[data-row="${row}"][data-col="${col}"]`);
        const chessPiece = document.createElement("div");
        chessPiece.classList.add("chess-piece");
        chessPiece.textContent = piece;
        square.appendChild(chessPiece);
    }

    // Example: Add pieces to the chessboard
    addChessPiece("♖", 0, 0); // Rook
    addChessPiece("♘", 0, 1); // Knight
    addChessPiece("♗", 0, 2); // Bishop
    addChessPiece("♕", 0, 3); // Queen
    addChessPiece("♔", 0, 4); // King
    addChessPiece("♗", 0, 5); // Bishop
    addChessPiece("♘", 0, 6); // Knight
    addChessPiece("♖", 0, 7); // Rook

    // Add pawns
    for (let col = 0; col < 8; col++) {
        addChessPiece("♙", 1, col);
        addChessPiece("♟", 6, col);
    }
});
