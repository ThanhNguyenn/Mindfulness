import React, { useCallback } from 'react';
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import logo from './logo.svg';
import './App.css';
import particlesOptions from "./particles.json";
import QuoteGenerating from './QuoteGenerating';
import Music from './Music';
function App() {
    const particlesInit = useCallback(async main => {
        await loadFull(main);
    }, [])

    return (
        <div className="App">
            <Particles options={particlesOptions} init={particlesInit}/>
            <header className="App-header">
                <QuoteGenerating />
                <Music />
               </header>
        </div>
    );
}

export default App;
