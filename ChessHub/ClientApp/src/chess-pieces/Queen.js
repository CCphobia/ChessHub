import Piece from "./Piece";
import * as Moves from "../chessboard/CommonMovePossibilities";

export default class Queen extends Piece {

    constructor(player) {
        super('queen',
        player,
            player === 'white' ? 'QueenWhite' : 'QueenBlack')
    }

    showPossibleMoves(chessboard) {
        this.findMyPiece(chessboard);
        return this.getValidMoves(this.coordinate.column, this.coordinate.row, chessboard);
    }

    getValidMoves(columnPosition, rowPosition, chessboard) {
        let possibleMoves = [];
        
        let columnMoveset = Moves.getColumnMoveSet(columnPosition, rowPosition, chessboard, this.player);
        let rowMoveset = Moves.getRowMoveSet(columnPosition, rowPosition, chessboard, this.player);
        let diagonalMoveset = Moves.getDiagonalMoveSet(columnPosition, rowPosition, chessboard, this.player);
        possibleMoves = possibleMoves.concat(columnMoveset, rowMoveset, diagonalMoveset);
        return possibleMoves;
    }
}