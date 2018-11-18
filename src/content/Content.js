import React, { Component } from 'react';
import './Content.css';
import { Button, Columns } from "react-bulma-components/full";

class Content extends Component {
    render() {
        return (
            <div>
                Contents
                <button className="button is-primary" color="danger" size="large" outlined>Wowza!</button>
                <button
                    renderAs="a"
                    href="https://alligator.io"
                    color="danger"
                    size="small"
                    rounded
                    outlined
                >
                    Wowza, it's a link!
                </button>
                <button color="success">Alligators are the best!</button>

            </div>

          //   <a  className="App-link"
          //       href="https://reactjs.org"
          //       target="_blank"
          //       rel="noopener noreferrer">
          //
          //       Learn React
          // </a>

        );
    }
}

export default Content;
