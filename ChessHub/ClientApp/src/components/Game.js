import React, { Component } from 'react';
import Chat from './Chat';

export class Game extends Component {
    static displayName = Game.name;

    constructor(props) {
        super(props);
        this.state = { ownerName: this.props.match.params.ownerName };
    }

    render() {
        return (
            <section id="services" className="services game-container">
                <div className="container height-100">

                    <div className="row height-100">
                        <div className="col-lg-6" data-aos="fade-up">
                            <div className="row chess-name-row">
                                <div className="col-lg-5" data-aos="fade-up">
                                    <h2>Maciej Ryś</h2>
                                </div>
                                <div className="col-lg-3" data-aos="fade-up">
                                    <h2>4</h2>
                                </div>
                            </div>
                            <div className="row chess-board-row">
                                <img alt="gra" className="chess-board-image" />
                            </div>
                            <div className="row">
                                <div className="col-lg-5" data-aos="fade-up">
                                    <h2>Krzysztof Nowak</h2>
                                </div>
                                <div className="col-lg-3" data-aos="fade-up">
                                    <h2>2</h2>
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
                                <div className="row">
                                    <div className="col-lg-4" data-aos="fade-up">
                                        1.
                                    </div>
                                    <div className="col-lg-4" data-aos="fade-up">
                                        e4
                                    </div>
                                    <div className="col-lg-4" data-aos="fade-up">
                                        e5
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-4" data-aos="fade-up">
                                        2.
                                    </div>
                                    <div className="col-lg-4" data-aos="fade-up">
                                        d4
                                    </div>
                                    <div className="col-lg-4" data-aos="fade-up">
                                        f5
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-4" data-aos="fade-up">
                                        3.
                                    </div>
                                    <div className="col-lg-4" data-aos="fade-up">
                                        a4
                                    </div>
                                    <div className="col-lg-4" data-aos="fade-up">
                                        b5
                                    </div>
                                </div>
                            </div>
                            <Chat ownerName={this.state.ownerName} />
                        </div>
                    </div>

                </div>
                </section>
        );
    }
}

