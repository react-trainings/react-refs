import React from 'react';
import logo from './logo.svg';
import './App.css';
import InputBox from './components/input-box/input-box.component';

function App() {
    return (
        <div className="app">
            <header className="app-header">
                <img src={logo} className="app-logo" alt="logo" />
                <h4 className="app-title">React refs</h4>
            </header>
            <main className="app-main">
                <InputBox />
            </main>
        </div>
    );
}

export default App;
