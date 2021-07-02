import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './Components/Home/Home';
import Repos from './Components/Repos/Repos';
import Perfil from './Components/Perfil/Perfil';
import './App.css';

export default function App() {
    return (
        <>
            <div className="container">
                <Router>
                    <div className="wrapper-home">
                        <Home />
                    </div>

                    <div className="wrapper-perfil" id="perfil">
                        <Perfil />
                    </div>

                    <div className="wrapper-repos">
                        <Repos />
                    </div>
                </Router>
            </div>
        </>
    );
}