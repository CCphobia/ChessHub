import Piece from "./Piece";
import * as MovesUtil from '../chessboard/MovesetUtil'

export default class King extends Piece {

    constructor(player) {
        super('king',
            player,
            player === 'white' ? 'KingWhite' : 'KingBlack');
    }

    showPossibleMoves(chessboard) {
        this.findMyPiece(chessboard);
        return this.getValidMoves(this.coordinate.column, this.coordinate.row, chessboard);
    }

    getValidMoves(columnPosition, rowPosition, chessboard) {
        let possibleMoves = [];

        //up
        let checkedColumn = columnPosition + 1;
        let checkedRow = rowPosition;
        let isCheck = MovesUtil.isCheck(checkedColumn, checkedRow, this.player, chessboard);

        if (!isCheck && checkedColumn < 8 && (chessboard[checkedColumn][checkedRow] == null || chessboard[checkedColumn][checkedRow].getPlayer() !== this.player)) {
            possibleMoves.push([checkedColumn, checkedRow]);
        }

        //down
         checkedColumn = columnPosition - 1;
         checkedRow = rowPosition;
         isCheck = MovesUtil.isCheck(checkedColumn, checkedRow, this.player, chessboard);

        if (!isCheck && checkedColumn >= 0 && (chessboard[checkedColumn][checkedRow] == null || chessboard[checkedColumn][checkedRow].getPlayer() !== this.player)) {
            possibleMoves.push([checkedColumn, checkedRow]);
        }

        //left
         checkedColumn = columnPosition;
         checkedRow = rowPosition - 1;
         isCheck = MovesUtil.isCheck(checkedColumn, checkedRow, this.player, chessboard);

        if (!isCheck && checkedRow >= 0 && (chessboard[checkedColumn][checkedRow] == null || chessboard[checkedColumn][checkedRow].getPlayer() !== this.player)) {
            possibleMoves.push([checkedColumn, checkedRow]);
        }


        //right
         checkedColumn = columnPosition;
         checkedRow = rowPosition + 1;
         isCheck = MovesUtil.isCheck(checkedColumn, checkedRow, this.player, chessboard);

        if (!isCheck && checkedRow < 8 && (chessboard[checkedColumn][checkedRow] == null || chessboard[checkedColumn][checkedRow].getPlayer() !== this.player)) {
            possibleMoves.push([checkedColumn, checkedRow]);
        }

        //up left
         checkedColumn = columnPosition + 1;
         checkedRow = rowPosition - 1;
         isCheck = MovesUtil.isCheck(checkedColumn, checkedRow, this.player, chessboard);

        if (!isCheck && checkedColumn < 8 && checkedRow >= 0 && (chessboard[checkedColumn][checkedRow] == null || chessboard[checkedColumn][checkedRow].getPlayer() !== this.player)) {
            possibleMoves.push([checkedColumn, checkedRow]);
        }

        //up right
         checkedColumn = columnPosition + 1;
         checkedRow = rowPosition + 1;
         isCheck = MovesUtil.isCheck(checkedColumn, checkedRow, this.player, chessboard);

        if (!isCheck && checkedColumn < 8 && checkedRow < 8 && (chessboard[checkedColumn][checkedRow] == null || chessboard[checkedColumn][checkedRow].getPlayer() !== this.player)) {
            possibleMoves.push([checkedColumn, checkedRow]);
        }

        //down left
         checkedColumn = columnPosition - 1;
         checkedRow = rowPosition - 1;
         isCheck = MovesUtil.isCheck(checkedColumn, checkedRow, this.player, chessboard);

        if (!isCheck && checkedColumn >= 0 && checkedRow >= 0 && (chessboard[checkedColumn][checkedRow] == null || chessboard[checkedColumn][checkedRow].getPlayer() !== this.player)) {
            possibleMoves.push([checkedColumn, checkedRow]);
        }

        //down right
         checkedColumn = columnPosition - 1;
         checkedRow = rowPosition + 1;
         isCheck = MovesUtil.isCheck(checkedColumn, checkedRow, this.player, chessboard);

        if (!isCheck && checkedColumn >= 0 && checkedRow < 8 && (chessboard[checkedColumn][checkedRow] == null || chessboard[checkedColumn][checkedRow].getPlayer() !== this.player)) {
            possibleMoves.push([checkedColumn, checkedRow]);
        }

        return possibleMoves;
    }
}