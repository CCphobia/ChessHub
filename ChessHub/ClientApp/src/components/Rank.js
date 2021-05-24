import React, { Component } from 'react';
import authService from './api-authorization/AuthorizeService'

export class Rank extends Component {
    static displayName = Rank.name;

    constructor(props) {
        super(props);
        this.state = { ranks: [], loading: true };
    }

    componentDidMount() {
        this.populateRankData();
    }

    async populateRankData() {
        const token = await authService.getAccessToken();
        const response = await fetch('weatherforecast', {
            headers: !token ? {} : { 'Authorization': `Bearer ${token}` }
        });
        console.log(response);
        const data = await response.json();
        this.setState({ ranks: data, loading: false });
    }

    static renderRankTable(forecasts) {
        return (
            <div> <table className='table table-striped' aria-labelledby="tabelLabel">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Temp. (C)</th>
                        <th>Temp. (F)</th>
                        <th>Summary</th>
                    </tr>
                </thead>
                <tbody>
                    {forecasts.map(forecast =>
                        <tr key={forecast.date}>
                            <td>{forecast.date}</td>
                            <td>{forecast.temperatureC}</td>
                            <td>{forecast.temperatureF}</td>
                            <td>{forecast.summary}</td>
                        </tr>
                    )}
                </tbody>
            </table>


                <div className="row">
                        <div className="col-lg-4 col-md-6" data-aos="fade-up">
                            <h2 className="title">Miejsce</h2>
                        </div>
                        <div className="col-lg-4 col-md-6" data-aos="fade-up">
                            <h2 className="title">Nazwa</h2>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-md-6" data-aos="fade-up">
                            <h4>1</h4>
                        </div>
                        <div className="col-lg-4 col-md-6" data-aos="fade-up">
                            <h4>Piotr Augustowski</h4>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6" data-aos="fade-up">
                            <h4>2</h4>
                        </div>
                        <div className="col-lg-4 col-md-6" data-aos="fade-up">
                            <h4>Krzysztof Nowak</h4>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6" data-aos="fade-up">
                            <h4>3</h4>
                        </div>
                        <div className="col-lg-4 col-md-6" data-aos="fade-up">
                            <h4>Marek Moskwa</h4>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6" data-aos="fade-up">
                            <h4>4</h4>
                        </div>
                        <div className="col-lg-4 col-md-6" data-aos="fade-up">
                            <h4>Maciej Ryś</h4>
                        </div>
                    </div></div>)
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : Rank.renderRankTable(this.state.ranks);

        return (
            <section id="services" className="services">
                <div className="container">

                    <div className="section-title">
                        <h2>Ranking</h2>
                    </div>
                    {contents}
                    

                </div>
            </section>
        );
    }
}
