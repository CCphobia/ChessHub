import React, { Component } from 'react';
import Chat from './Chat';
import { initializeDefaultChessBoard } from '../chessboard/Chessboard'
import { HubConnectionBuilder } from '@microsoft/signalr';
import authService from './api-authorization/AuthorizeService';

class PossibleMove extends Component {
    constructor(props) {
        super(props);
        this.state = { piece: props.piece, replacedPiece: props.replacedPiece  };
    }
} 

export class Game extends Component {
    static displayName = Game.name;

    constructor(props) {
        super(props);
        this.moves = [];
        this.turn = 0;
        this.playingColor = "white";
        this.blackPlayer = "";
        this.whitePlayer = "";
        this.connection = new HubConnectionBuilder().withUrl('/GameChat').build();
        this.color = "";
        this.state = { chessboard: initializeDefaultChessBoard(), ownerName: this.props.match.params.ownerName };
        if (this.connection) {
            this.connection.start()
                .then(result => {
                    this.connection.send('JoinRoom', this.state.ownerName);
                }).catch(e => console.log('Connection failed: ', e));
            this.connection.on('ReceiveMove', Move => {
                this.receiveMove(Move)
            });
            this.connection.on('PlayerJoin', () => {
                var millisecondsToWait = 2000;
                setTimeout(() => this.getInitialData(true), millisecondsToWait);
            });
        }
        var millisecondsToWait = 2000;
        setTimeout(() => this.getInitialData(), millisecondsToWait);
    }

    async joinToRoom(ownerName, userName) {
        const token = await authService.getAccessToken();
        const response =await fetch('game/JoinPlayer/' + ownerName, {
            method: 'PUT',
            headers: !token ? {} : {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                Email: userName
            })
        })
        const data = await response.json();
        if (data.blackPlayer != null && data.whitePlayer != null) {
            var millisecondsToWait = 2000;
            setTimeout(() => this.getInitialData(true), millisecondsToWait);
        }
    }

    async getInitialData(fromJoining = false)
    {
        const user = await authService.getUser();
        if (user.name != this.state.ownerName) {
            if (!fromJoining) {
                return (this.joinToRoom(this.state.ownerName, user.name));
            }
        }
        const token = await authService.getAccessToken();
        const response = await fetch('game/GetInitialGame/' + this.state.ownerName, {
        headers: !token ? {} : { 'Authorization': `Bearer ${token}` }
        });
        const data = await response.json();
        if (data.blackPlayer != null) {
            this.blackPlayer = data.blackPlayer.email;
            if (user.name == data.blackPlayer.email) {
                this.color = 'black';
            }
        }
        if (data.whitePlayer != null) {
            this.whitePlayer = data.whitePlayer.email;
            if (user.name == data.whitePlayer.email) {
                this.color = 'white';
            }
        }

        this.forceUpdate();
    }

    receiveMove(Move) {
        var piece = this.state.chessboard[Move.oldColumn][Move.oldRow];
        var oldPosition = { column: Move.oldColumn, row: Move.oldRow}
        var newPosition = { column: Move.newColumn, row: Move.newRow }
        this.doMove(piece, oldPosition, newPosition);
    }

    async sendMove(possibleMove) {
        this.turn++;
        possibleMove.state.piece.findMyPiece(this.state.chessboard);
        var oldPosition = possibleMove.state.piece.coordinate;
        var newPosition;
        for (var i = 0; i < this.state.chessboard.length; i++) {
            for (var j = 0; j < this.state.chessboard[i].length; j++) {
                if (this.state.chessboard[i][j] === possibleMove) {
                    newPosition = { column: i, row: j }
                }
            }
        }


        const move = {
            oldRow: oldPosition.row,
            oldColumn: oldPosition.column,
            newRow: newPosition.row,
            newColumn: newPosition.column,
            room: this.state.ownerName
        };

        if (this.connection.connectionStarted) {
            try {
                await this.connection.send('SendMove', move);
            }
            catch (e) {
                console.log(e);
            }
        }
        else {
            alert('No connection to server yet.');
        }
    }
    

    doMove(piece, oldPosition, newPosition) {
        if (this.playingColor == "white") {
            this.playingColor = "black";
        } else {
            this.playingColor = "white";
        }
        this.state.chessboard[newPosition.column][newPosition.row] = piece;
        this.state.chessboard[oldPosition.column][oldPosition.row] = null;
        switch (newPosition.column) {
            case 0: newPosition.column = "A";
                break;
            case 1: newPosition.column = "B";
                break;
            case 2: newPosition.column = "C";
                break;
            case 3: newPosition.column = "D";
                break;
            case 4: newPosition.column = "E";
                break;
            case 5: newPosition.column = "F";
                break;
            case 6: newPosition.column = "G";
                break;
            case 7: newPosition.column = "H";
                break;
        }
        this.moves.push(newPosition);
        this.clearPossibleMoves();
        this.forceUpdate();
    }

    showPossibleMoves(piece) {
        if (this.playingColor != this.color) {
            return;
        }
        this.clearPossibleMoves();
        var possibleMoves = piece.showPossibleMoves(this.state.chessboard);
        for (var i = 0; i < this.state.chessboard.length; i++) {
            for (var j = 0; j < this.state.chessboard[i].length; j++) {
                for (var k = 0; k < possibleMoves.length; k++) {
                    if (i == possibleMoves[k][0] && j == possibleMoves[k][1]) {
                        var props = { piece: piece, replacedPiece: this.state.chessboard[i][j] };
                        this.state.chessboard[i][j] = new PossibleMove(props);
                    }
                }

            }
        }
        this.forceUpdate();
    }

    clearPossibleMoves() {
        for (var i = 0; i < this.state.chessboard.length; i++) {
            for (var j = 0; j < this.state.chessboard[i].length; j++) {
                if (this.state.chessboard[i][j] instanceof PossibleMove) {
                    this.state.chessboard[i][j] = this.state.chessboard[i][j].state.replacedPiece;
                }
            }
        }
    }

    renderChessboard(chessboard) {
        return (
                <div className="wrapper">
                {chessboard.map(row =>
                    row.map(field =>
                        field == null ? <div className="box"></div> : field instanceof PossibleMove ? <div onClick={() => this.sendMove(field)} className="box PossibleMove"></div> : this.color != field.player ? <div disabled className={"box " + field.getClassName()}></div> : <div onClick={() => this.showPossibleMoves(field)} className={"box " + field.getClassName()}></div>
                        )
                    )}
                </div>
            );
    }


    render() {
        let chessboard = this.renderChessboard(this.state.chessboard);
        let movesToDisplay = [];
        for (var i = 0; i < this.turn * 2; i++) {
            if (this.moves.length > i) {
                movesToDisplay.push(<div className="row"> <div className="col-lg-4" data-aos="fade-up">{i}</div> <div className="col-lg-4" data-aos="fade-up"> {this.moves[i].column} {this.moves[i].row + 1 }</div></div>);
            }
        }
        return (
            <section id="services" className="services game-container">
                <div className="container height-100">

                    <div className="row height-100">
                        <div className="col-lg-6" data-aos="fade-up">
                            <div className="row chess-name-row">
                                <div className="col-lg-4" data-aos="fade-up">
                                    <h3>{this.blackPlayer}</h3>
                                </div>
                                <div className="col-lg-1" data-aos="fade-up">
                                    <h3>X</h3>
                                </div>
                            </div>
                            <div className="row chess-board-row">
                                {chessboard}
                            </div>
                            <div className="row">
                                <div className="col-lg-4" data-aos="fade-up">
                                    <h3>{this.whitePlayer}</h3>
                                </div>
                                <div className="col-lg-1" data-aos="fade-up">
                                    <h3>X</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-1" data-aos="fade-up">
 
                        </div>
                        <div className="col-lg-5" data-aos="fade-up">
                            <div className="row moves">
                                <div className="row">
                                    <h2>Ruchy:</h2>
                                </div>
                                {movesToDisplay}
                            </div>
                            <Chat ownerName={this.state.ownerName} connection= {this.connection} />
                        </div>
                    </div>

                </div>
                </section>
        );
    }
}

