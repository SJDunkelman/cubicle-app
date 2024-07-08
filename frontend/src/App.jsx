// src/App.jsx

import React from 'react';
import CharacterStats from './components/stats/CharacterStats.jsx';

function App() {
    return (
        <div className="container mx-auto p-4 bg-purple min-h-screen w-screen">
            <h1 className="text-2xl font-bold mb-4 text-white">Character Stats</h1>
            <CharacterStats />
        </div>
    );
}

export default App;