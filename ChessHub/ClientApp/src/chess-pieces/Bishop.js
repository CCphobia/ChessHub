import Piece from "./Piece";
import * as Moves from "../chessboard/CommonMovePossibilities";

export default class Bishop extends Piece {

    constructor(player) {
        super('bishop',
        player,
            player === 'white' ? 'BishopWhite' : 'BishopBlack');
    }

    showPossibleMoves(chessboard) {
        this.findMyPiece(chessboard);
        return this.getValidMoves(this.coordinate.column, this.coordinate.row, chessboard);
    }


    getValidMoves(columnPosition, rowPosition, chessboard) {
        let possibleMoves = Moves.getDiagonalMoveSet(columnPosition, rowPosition, chessboard, this.player);

        return possibleMoves;

    }
}