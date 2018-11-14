import React, {Component} from 'react';
import Header from './header/Header';
import Footer from './footer/Footer';
import Content from './content/Content';

import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header/>
                <Content/>
                <Footer/>
            </div>
        );
    }
}

export default App;
