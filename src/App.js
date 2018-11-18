import React, {Component} from 'react';
import Header from './header/Header';
import Footer from './footer/Footer';
import Content from './content/Content';

import './App.css';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const About = () => <h2>About</h2>;
const Contact = () => <h2>Contact</h2>;

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">

                        <Header/>
                        <Route path="/" exact component={Content} />
                        <Route path="/about/" component={About} />
                        <Route path="/contact/" component={Contact} />

                        <Footer/>


                </div>
            </Router>
        );
    }
}

export default App;
