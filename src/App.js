import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import NameCard from './components/NameCard';
import LikesButton from './components/LikesButton';
import DigitalClock from './components/DigitalClock';

const tag = ['稻草收割者', '玉米达人'];

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <NameCard name='Fire' number='13211314111' isHuman={false} tags={tag}/>
                <LikesButton/>
                <DigitalClock/>
            </div>
        );
    }
}

export default App;
