import Queen from '../chess-pieces/Queen'
import King from '../chess-pieces/King'
import Pawn from '../chess-pieces/Pawn'
import Bishop from '../chess-pieces/Bishop'
import Rook from '../chess-pieces/Rook'
import Knight from '../chess-pieces/Knight'
export function initializeEmptyChessboard() {
    var chessboard = [];
    for (let i = 0; i < 8; i++) {
        chessboard[i] = new Array(8);
    }

    chessboard.forEach(row => {
        for(let i = 0; i < row.length; i++) {
            row[i] = null;
        }
    });
    return chessboard;
}

export function initializeDefaultChessBoard() {
    var chessboard = [];
    for (let i = 0; i < 8; i++) {
        chessboard[i] = new Array(8);
        for (let j = 0; j < chessboard[i].length; j++) {
            if (j == 0) {
                switch (i) {
                    case 0:
                    case 7:
                        chessboard[i][j] = new Rook('black');
                        break;
                    case 1:
                    case 6:
                        chessboard[i][j] = new Knight('black');
                        break;
                    case 2:
                    case 5:
                        chessboard[i][j] = new Bishop('black');
                        break;
                    case 3:
                        chessboard[i][j] = new Queen('black');
                        break;
                    case 4:
                        chessboard[i][j] = new King('black');
                        break;
                    default:
                        chessboard[i][j] = null;
                        break;
                }
            } else if (j === 1) {
                chessboard[i][j] = new Pawn('black');
            } else if (j === 6) {
                chessboard[i][j] = new Pawn('white');
            } else if (j === 7) {
                switch (i) {
                    case 0:
                    case 7:
                        chessboard[i][j] = new Rook('white');
                        break;
                    case 1:
                    case 6:
                        chessboard[i][j] = new Knight('white');
                        break;
                    case 2:
                    case 5:
                        chessboard[i][j] = new Bishop('white');
                        break;
                    case 4:
                        chessboard[i][j] = new Queen('white');
                        break;
                    case 3:
                        chessboard[i][j] = new King('white');
                        break;
                    default:
                        chessboard[i][j] = null;
                        break;
                }
            } else {
                chessboard[i][j] = null;
            }

        }
    }
    return chessboard;
}