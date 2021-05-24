import React, { Component } from 'react';


export class GameRooms extends Component {
    static displayName = GameRooms.name;

    render() {
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
                            <i className="bx bx-refresh bx-md"></i>
                            </div>
                        </div>

                    <div className="row">
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

                    <div className="row">
                        <div className="col-lg-4 col-md-6" data-aos="fade-up">
                                <h4>Piotr Augustowski</h4>
                            </div>
                        <div className="col-lg-4 col-md-6" data-aos="fade-up">
                                <h4>1</h4>
                            </div>
                        <div className="col-lg-4 col-md-6" data-aos="fade-up">
                                <a href="/" role="button" aria-pressed="true">Dołącz</a>
                            </div>
                        </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6" data-aos="fade-up">
                                <h4>Krzysztof Nowak</h4>
                            </div>
                        <div className="col-lg-4 col-md-6" data-aos="fade-up">
                                <h4>2</h4>
                            </div>
                        <div className="col-lg-4 col-md-6" data-aos="fade-up">
                                <a href="/"  role="button" aria-pressed="true">Dołącz</a>
                            </div>
                        </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6" data-aos="fade-up">
                                <h4>Marek Moskwa</h4>
                            </div>
                        <div className="col-lg-4 col-md-6" data-aos="fade-up">
                                <h4>3</h4>
                            </div>
                        <div className="col-lg-4 col-md-6" data-aos="fade-up">
                                <a href="/"  role="button" aria-pressed="true">Dołącz</a>
                            </div>
                        </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6" data-aos="fade-up">
                                <h4>Maciej Ryś</h4>
                            </div>
                        <div className="col-lg-4 col-md-6" data-aos="fade-up">
                                <h4>4</h4>
                            </div>
                        <div className="col-lg-4 col-md-6" data-aos="fade-up">
                                <a href="/"  role="button" aria-pressed="true">Dołącz</a>
                            </div>
                        </div>


                    <div className="col-lg-4 col-md-6" data-aos="fade-up">
                        <a href="/" className="btn btn-primary  btn-lg active" role="button" aria-pressed="true">Stwórz pokój</a>
                        </div>

                    </div>
                </section>
        );
    }
}