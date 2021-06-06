export function isCheck(kingColumn, kingRow, player, chessboard) {
    let oppositePlayerPiecesMoves = getOppositePlayerPiecesMoves(player, chessboard);

    return oppositePlayerPiecesMoves.includes([kingColumn, kingRow]);
}

export function isCheckMate(kingColumn, kingRow, king, chessboard) {
    let oppositePlayerPiecesMoves = getOppositePlayerPiecesMoves(king.getPlayer(), chessboard);
    let kingMoves = king.getValidMoves();

    if(kingMoves.length === 0 && oppositePlayerPiecesMoves.includes([kingColumn, kingRow])) {
        return true;
    } else {
        return false;
    }
}

export function isStalemate(player, chessboard) {
    let movePossibilities = getOppositePlayerPiecesMoves(player === 'white' ? 'black' : 'white', chessboard)

    return movePossibilities.length === 0;
}

function getOppositePlayerPiecesMoves(player, chessboard) {
    let moveset = [];

    for(let i = 0; i < 8; i++) {
        for(let j = 0; j < 8; j++) {
            if (chessboard[i][j] !== null) {
                if (!chessboard[i][j].getPlayer() === player) {
                    moveset.push(chessboard[i][j].getValidMoves(i, j, chessboard));
                }
            }
        }
    }

    return moveset;
}