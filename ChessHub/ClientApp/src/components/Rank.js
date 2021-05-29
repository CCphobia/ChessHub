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
        const response = await fetch('user', {
            headers: !token ? {} : { 'Authorization': `Bearer ${token}` }
        });
        const data = await response.json();
        console.log(data);
        this.setState({ ranks: data, loading: false });
    }

    static renderRankTable(users) {
        return (
            <div>
                <div className="row">
                        <div className="col-lg-4 col-md-6" data-aos="fade-up">
                            <h2 className="title">Miejsce</h2>
                        </div>
                        <div className="col-lg-4 col-md-6" data-aos="fade-up">
                            <h2 className="title">Nazwa</h2>
                        </div>
                    </div>
                {users.map(user =>
                    <div key={user.id} className="row">
                        <div className="col-lg-4 col-md-6" data-aos="fade-up">
                            <h4>{user.rank}</h4>
                        </div>
                        <div className="col-lg-4 col-md-6" data-aos="fade-up">
                            <h4>{user.userName}</h4>
                        </div>
                    </div>
                )}
                  </div>)
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
