import React, { Component } from 'react';
import { NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import authService from './api-authorization/AuthorizeService';
import { LoginMenu } from './api-authorization/LoginMenu';
import '../assets/css/NavMenu.css';

export class NavMenu extends Component {
  static displayName = NavMenu.name;

  constructor (props) {
    super(props);  
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
        collapsed: true,
        isAuthenticatedUser: false
    };
  }

    componentDidMount() {
        this.populateState();
    }

    async populateState() {
        const isAuthenticated = await Promise.all([authService.isAuthenticated()])
        this.setState({
            collapsed: this.state.collapsed,
            isAuthenticatedUser: isAuthenticated
        });
    }

  toggleNavbar () {
    this.setState({
        collapsed: !this.state.collapsed,
        isAuthenticatedUser: this.state.isAuthenticatedUser
    });
  }

    render() {
        if (this.state.isAuthenticatedUser[0]) {
            return (
                <header id="header">
                    <div className="d-flex flex-column">
                        <div className="profile">
                            <img alt="" className="img-fluid rounded-circle logo" />
                            <h1 className="text-light"><a href="/">Chess.pl</a></h1>
                        </div>
                        <nav id="navbar" className="nav-menu navbar">
                            <ul>
                                <NavItem>
                                    <NavLink tag={Link} className="nav-link scrollto" to="/GameRooms"><i className="bx bxs-chess"></i>Graj</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={Link} className="nav-link scrollto" to="/Rank"><i className="bx bx-trophy"></i>Ranking</NavLink>
                                </NavItem>
                                <LoginMenu>
                                </LoginMenu>
                            </ul>

                        </nav>
                    </div>
                </header>
            );
        } else {
            return (
                <header id="header">
                    <div className="d-flex flex-column">
                        <div className="profile">
                            <img src="assets/img/chess-icon.png" alt="" className="img-fluid rounded-circle" />
                            <h1 className="text-light"><a href="/">Chess.pl</a></h1>
                        </div>
                        <nav id="navbar" className="nav-menu navbar">
                            <ul>
                                <LoginMenu>
                                </LoginMenu>
                            </ul>

                        </nav>
                    </div>
                </header>
            );
        }
   
  }
}
