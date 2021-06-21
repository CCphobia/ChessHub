import React, { Component } from 'react';
import authService from './api-authorization/AuthorizeService';
import { Link } from "react-router-dom"; 


export class GameRooms extends Component {
    static displayName = GameRooms.name;

    constructor(props) {
        super(props);
        this.state = { gameRooms: [], loading: true, username: "" };
        this.populateGameRoomsData = this.populateGameRoomsData.bind(this);
        this.createRoom = this.createRoom.bind(this);
        this.renderGameRooms = this.renderGameRooms.bind(this);
    }

    componentDidMount() {
        this.populateGameRoomsData();
    }

    async populateGameRoomsData() {
        const user = await authService.getUser();
        const token = await authService.getAccessToken();
        const response = await fetch('game/GetNotStartedGames', {
            headers: !token ? {} : { 'Authorization': `Bearer ${token}` }
        });
        const data = await response.json();
        this.setState({ gameRooms: data, loading: false, username: user.name });
    }

    async createRoom() {
        const token = await authService.getAccessToken();
       
        await fetch('game/AddGame', {
            method: 'POST',
            headers: !token ? {} : {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json' ,
            },
            body: JSON.stringify({
                GameResultId: 4,
                MovesCounter: 0,
                Moves: "",
                OwnerPlayer: {
                    Email: this.state.username
                }
            })
        })
    }

    renderGameRooms(gameRooms) {
        return ( <div><div className="row">
                        <div className="col-lg-4 col-md-6" data-aos="fade-up">
                            <h2 className="title">Nazwa</h2>
                            </div>
                        <div className="col-lg-4 col-md-6" data-aos="fade-up">
                            <h2 className="title">Ranking</h2>
                            </div>
                        <div className="col-lg-4 col-md-6" data-aos="fade-up">
                            <h2 className="title">Dołącz</h2>
                            </div>
        </div>
            {gameRooms.map(gameroom =>
                <div key={gameroom.startTime} className="row">
                    <div className="col-lg-4 col-md-6" data-aos="fade-up">
                        <h4>{gameroom.ownerPlayer.email}</h4>
                    </div>
                    <div className="col-lg-4 col-md-6" data-aos="fade-up">
                        <h4>{gameroom.ownerPlayer.rank}</h4>
                    </div>
                    <div className="col-lg-4 col-md-6" data-aos="fade-up">
                        <Link to={"/Game/" + gameroom.ownerPlayer.email} role="button" aria-pressed="true">Dołącz</Link>
                    </div>
                </div>
            )}
        </div>
        )
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : this.renderGameRooms(this.state.gameRooms);
        return (
            <section id="services" className="services">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6" data-aos="fade-up">
                            <div className="section-title">
                                    <h2>Oczekujący gracze</h2>
                                </div>
                            </div>
                        <div className="col-lg-4 col-md-6" data-aos="fade-up">

                            </div>
                        <div className="col-lg-4 col-md-6" data-aos="fade-up">
                            <i onClick={this.populateGameRoomsData} className="bx bx-refresh bx-md"></i>
                            </div>
                        </div>

                   
                    {contents}

                    <div className="col-lg-4 col-md-6" data-aos="fade-up">
                        <Link to={"/Game/" + this.state.username} onClick={this.createRoom} className="btn btn-primary  btn-lg active" role="button" aria-pressed="true">Stwórz pokój</Link>
                        </div>

                    </div>
                </section>
        );
    }
}