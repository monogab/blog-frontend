import React, { Component } from 'react';
import './Header.css';
import logo from '../logo.svg';

class Header extends Component {
    render() {
        return (
            <header className="App-header">

                <span>Blog by monogab</span>
                <span class="header-right">
                    <a class="active" href="#home">Home</a>
                    <a href="#contact">Contact</a>
                    <a href="#about">About</a>
                </span>


            </header>

        );
    }
}

export default Header;
