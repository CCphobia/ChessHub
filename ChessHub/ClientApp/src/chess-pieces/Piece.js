export default class Piece {

    constructor(name, player, className) {
        this.name = name;
        this.player = player;
        this.className = className;
        this.coordinate = { row: 0, column: 0 }
    }

    findMyPiece(chessboard) {
        for (var i = 0; i < chessboard.length; i++) {
            for (var j = 0; j < chessboard[i].length; j++) {
                if (chessboard[i][j] === this) {
                    this.coordinate = { column: i, row: j }
                    return;
                }
            }
        }
    }

    showPossibleMoves(chessboard) {
        return;
    }

    getPlayer() {
        return this.player;
    }

    getName() {
        return this.player;
    }

    getClassName() {
        return this.className;
    }

    getValidMoves(columnPosition, rowPosition, chessboard) {
        throw new Error();
    }
}