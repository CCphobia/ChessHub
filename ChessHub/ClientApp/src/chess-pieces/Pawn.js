import Piece from "./Piece";
import * as Moves from "../chessboard/CommonMovePossibilities";

export default class Pawn extends Piece {

    constructor(player) {
        super('pawn',
        player,
            player === 'white' ? 'PawnWhite' : 'PawnBlack')
    }

    showPossibleMoves(chessboard) {
        this.findMyPiece(chessboard);
        return this.getValidMoves(this.coordinate.column, this.coordinate.row, chessboard);
    }

    getValidMoves(columnPosition, rowPosition, chessboard) {
        let possibleMoves = [];
        if (this.player == 'white') {
            if (rowPosition - 1 >= 0) {
                if (chessboard[columnPosition][rowPosition - 1] == null) {
                    possibleMoves.push([columnPosition, rowPosition - 1]);
                }

                if (columnPosition + 1 < 8) {
                    if (chessboard[columnPosition + 1][rowPosition - 1] != null && chessboard[columnPosition + 1][rowPosition - 1].getPlayer() != this.player) {
                        possibleMoves.push([columnPosition + 1, rowPosition - 1]);
                    }
                }

                if (columnPosition - 1 >= 0) {
                    if (chessboard[columnPosition - 1][rowPosition - 1] != null && chessboard[columnPosition - 1][rowPosition - 1].getPlayer() != this.player) {
                        possibleMoves.push([columnPosition - 1, rowPosition - 1]);
                    }
                }
            }
        } else {
            if (rowPosition + 1 < 8) {
                if (chessboard[columnPosition][rowPosition + 1] == null) {
                    possibleMoves.push([columnPosition, rowPosition + 1]);
                }

                if (columnPosition + 1 < 8) {
                    if (chessboard[columnPosition + 1][rowPosition + 1] != null && chessboard[columnPosition + 1][rowPosition + 1].getPlayer() != this.player) {
                        possibleMoves.push([columnPosition + 1, rowPosition + 1]);
                    }
                }

                if (columnPosition - 1 >= 0) {
                    if (chessboard[columnPosition - 1][rowPosition + 1] != null && chessboard[columnPosition - 1][rowPosition + 1].getPlayer() != this.player) {
                        possibleMoves.push([columnPosition - 1, rowPosition + 1]);
                    }
                }
            }
        }
        return possibleMoves;
    }
}