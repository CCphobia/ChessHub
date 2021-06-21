export function getColumnMoveSet(columnPosition, rowPosition, chessboard, player) {
    //array of [columnPosition, rowPosition] arrays
    let moveSet = [];

    //search up
    let columnPositionCounter = columnPosition + 1;
    while (columnPositionCounter < 8) {
        let checkedField = chessboard[columnPositionCounter][rowPosition];

        if (checkedField !== null) {
            if (checkedField.getPlayer() !== player) {
                moveSet.push([columnPositionCounter, rowPosition]);
            }
            break;
        } else {
            moveSet.push([columnPositionCounter, rowPosition]);
            columnPositionCounter++;
        }
    }

    //search down
    columnPositionCounter = columnPosition - 1;
    while (columnPositionCounter >= 0) {
        let checkedField = chessboard[columnPositionCounter][rowPosition];

        if (checkedField !== null) {
            if (checkedField.getPlayer() !== player) {
                moveSet.push([columnPositionCounter, rowPosition]);
            }
            break;
        } else {
            moveSet.push([columnPositionCounter, rowPosition]);
            columnPositionCounter--;
        }
    }

    return moveSet;
}

export function getRowMoveSet(columnPosition, rowPosition, chessboard, player) {
    //array of [columnPosition, rowPosition] arrays
    let moveSet = [];

    //search right
    let rowPositionCounter = rowPosition + 1;
    while (rowPositionCounter < 8) {
        let checkedField = chessboard[columnPosition][rowPositionCounter];

        if (checkedField !== null) {
            if (checkedField.getPlayer() !== player) {
                moveSet.push([columnPosition, rowPositionCounter]);
            }
            break;
        } else {
            moveSet.push([columnPosition, rowPositionCounter]);
            rowPositionCounter++;
        }
    }

    //search left
    rowPositionCounter = rowPosition - 1;
    while (rowPositionCounter >= 0) {
        let checkedField = chessboard[columnPosition][rowPositionCounter];

        if (checkedField !== null) {
            if (checkedField.getPlayer() !== player) {
                moveSet.push([columnPosition, rowPositionCounter]);
            }
            break;
        } else {
            moveSet.push([columnPosition, rowPositionCounter]);
            rowPositionCounter--;
        }
    }

    return moveSet;
}

export function getDiagonalMoveSet(columnPosition, rowPosition, chessboard, player) {
    //array of [columnPosition, rowPosition] arrays
    let moveSet = [];

    //search up right
    let columnPositionCounter = columnPosition + 1;
    let rowPositionCounter = rowPosition + 1;
    while (columnPositionCounter < 8 && rowPositionCounter < 8) {
        var checkedField = chessboard[columnPositionCounter][rowPositionCounter];

        if (checkedField !== null) {
            if (checkedField.getPlayer() !== player) {
                moveSet.push([columnPositionCounter, rowPositionCounter]);
            }
            break;
        } else {
            moveSet.push([columnPositionCounter, rowPositionCounter]);
            columnPositionCounter++;
            rowPositionCounter++;
        }
    }

    //search down left
    columnPositionCounter = columnPosition - 1;
    rowPositionCounter = rowPosition - 1;
    while (columnPositionCounter >= 0 && rowPositionCounter >= 0) {
        var checkedField = chessboard[columnPositionCounter][rowPositionCounter];

        if (checkedField !== null) {
            if (checkedField.getPlayer() !== player) {
                moveSet.push([columnPositionCounter, rowPositionCounter]);
            }
            break;
        } else {
            moveSet.push([columnPositionCounter, rowPositionCounter]);
            columnPositionCounter--;
            rowPositionCounter--;
        }
    }

    //search up left
    columnPositionCounter = columnPosition + 1;
    rowPositionCounter = rowPosition - 1;
    while (columnPositionCounter < 8 && rowPositionCounter >= 0) {
        var checkedField = chessboard[columnPositionCounter][rowPositionCounter];


        if (checkedField !== null) {
            if (checkedField.getPlayer() !== player) {
                moveSet.push([columnPositionCounter, rowPositionCounter]);
            }
            break;
        } else {
            moveSet.push([columnPositionCounter, rowPositionCounter]);
            columnPositionCounter++;
            rowPositionCounter--;
        }
    }

    //search down right
    columnPositionCounter = columnPosition - 1;
    rowPositionCounter = rowPosition + 1;
    while (columnPositionCounter >= 0 && rowPositionCounter < 8) {

        var checkedField = chessboard[columnPositionCounter][rowPositionCounter];

        if (checkedField !== null) {
            if (checkedField.getPlayer() !== player) {
                moveSet.push([columnPositionCounter, rowPositionCounter]);
            }
            break;
        } else {
            moveSet.push([columnPositionCounter, rowPositionCounter]);
            columnPositionCounter--;
            rowPositionCounter++;
        }
    }

    return moveSet;
}