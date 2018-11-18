import React, { Component } from 'react';
import './Header.css';
import logo from '../logo.svg';

class Header extends Component {
    render() {
        return (
            <header className="App-header">
                <nav class="navbar is-transparent nav-top">
                    <div class="navbar-brand">
                        <span>Blog by monogab</span>
                        <span class="header-right">
                            <a class="active" href="#home">Home</a>
                            <a href="#contact">Contact</a>
                            <a href="#about">About</a>
                        </span>
                    </div>
                    <div class="navbar-item">
                        <div class="field is-grouped">
                            <p class="control">
                                <a href="/login" class="button is-primary is-outlined"> Login</a>


                            </p>
                            <p class="control"><a href="/pricing" class="button is-success is-outlined">Signup</a></p>

                        </div>
                    </div>
                </nav>


            </header>

        );
    }
}

export default Header;

