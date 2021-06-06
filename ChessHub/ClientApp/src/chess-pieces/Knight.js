import Piece from "./Piece";
import * as Moves from "../chessboard/CommonMovePossibilities";

export default class Knight extends Piece {

    constructor(player) {
        super('knight',
            player,
            player === 'white' ? 'KnightWhite' : 'KnightBlack')
    }

    showPossibleMoves(chessboard) {
        this.findMyPiece(chessboard);
        return this.getValidMoves(this.coordinate.column, this.coordinate.row, chessboard);
    }

    getValidMoves(columnPosition, rowPosition, chessboard) {
        let possibleMoves = [];

        //up left
        let checkedColumn = columnPosition + 2;
        let checkedRow = rowPosition - 1;

        if (checkedColumn < 8 && checkedRow >= 0 && (chessboard[checkedColumn][checkedRow] == null || chessboard[checkedColumn][checkedRow].getPlayer() !== this.player)) {
            possibleMoves.push([checkedColumn, checkedRow]);
        }

        //up right
         checkedColumn = columnPosition + 2;
         checkedRow = rowPosition + 1;

        if (checkedColumn < 8 && checkedRow < 8 && (chessboard[checkedColumn][checkedRow] == null || chessboard[checkedColumn][checkedRow].getPlayer() !== this.player)) {
            possibleMoves.push([checkedColumn, checkedRow]);
        }

        //down left
         checkedColumn = columnPosition - 2;
         checkedRow = rowPosition - 1;

        if (checkedColumn >= 0 && checkedRow >= 0 && (chessboard[checkedColumn][checkedRow] == null || chessboard[checkedColumn][checkedRow].getPlayer() !== this.player)) {
            possibleMoves.push([checkedColumn, checkedRow]);
        }

        //down right
         checkedColumn = columnPosition - 2;
         checkedRow = rowPosition + 1;

        if (checkedColumn >= 0 && checkedRow < 8 && (chessboard[checkedColumn][checkedRow] == null || chessboard[checkedColumn][checkedRow].getPlayer() !== this.player)) {
            possibleMoves.push([checkedColumn, checkedRow]);
        }

        //right up
         checkedColumn = columnPosition + 1;
         checkedRow = rowPosition + 2;

        if (checkedColumn < 8 && checkedRow < 8 && (chessboard[checkedColumn][checkedRow] == null || chessboard[checkedColumn][checkedRow].getPlayer() !== this.player)) {
            possibleMoves.push([checkedColumn, checkedRow]);
        }

        //right down
         checkedColumn = columnPosition - 1;
         checkedRow = rowPosition + 2;

        if (checkedColumn >= 0 && checkedRow < 8 && (chessboard[checkedColumn][checkedRow] == null || chessboard[checkedColumn][checkedRow].getPlayer() !== this.player)) {
            possibleMoves.push([checkedColumn, checkedRow]);
        }

        //left up
         checkedColumn = columnPosition + 1;
         checkedRow = rowPosition - 2;

        if (checkedColumn < 8 && checkedRow >= 0 && (chessboard[checkedColumn][checkedRow] == null || chessboard[checkedColumn][checkedRow].getPlayer() !== this.player)) {
            possibleMoves.push([checkedColumn, checkedRow]);
        }

        //left down
         checkedColumn = columnPosition - 1;
         checkedRow = rowPosition - 2;

        if (checkedColumn >= 0 && checkedRow >- 0 && (chessboard[checkedColumn][checkedRow] == null || chessboard[checkedColumn][checkedRow].getPlayer() !== this.player)) {
            possibleMoves.push([checkedColumn, checkedRow]);
        }

        return possibleMoves;
    }
}