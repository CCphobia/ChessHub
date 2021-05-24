import React, { Component } from 'react';


export class Home extends Component {
  static displayName = Home.name;

  render () {
      return (
              <section id="hero" className="d-flex flex-column justify-content-center align-items-center">
              <div className="hero-container" data-aos="fade-in">
                  <h1>Szachy - Online</h1>
                  </div>
              </section>
    );
  }
}