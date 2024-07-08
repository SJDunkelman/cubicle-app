import { useState, useEffect } from 'react'
import {CharacterStatsService} from "../bindings/changeme";
import {Button} from "@/components/ui/button.jsx";
import StatCard from './components/StatCard.jsx';

function App() {
    const [baseStats, setBaseStats] = useState({});
    const [skillStats, setSkillStats] = useState({});
    const [nextLevelXP, setNextLevelXP] = useState({});

    useEffect(() => {
        CharacterStatsService.GetBaseStats().then(setBaseStats);
        CharacterStatsService.GetSkillStats().then(setSkillStats);
    }, []);

    useEffect(() => {
        const allStats = { ...baseStats, ...skillStats };
        Object.keys(allStats).forEach(statName => {
            CharacterStatsService.GetNextLevelXP(statName).then(xp => {
                setNextLevelXP(prev => ({ ...prev, [statName]: xp }));
            });
        });
    }, [baseStats, skillStats]);


    const renderStats = (stats, title) => (
        <>
            <h2 className="text-xl font-bold my-4">{title}</h2>
            <div className="flex flex-wrap justify-center">
                {Object.entries(stats).map(([name, stat]) => (
                    <StatCard
                        key={name}
                        name={name}
                        stat={stat}
                        nextLevelXP={nextLevelXP[name]}
                    />
                ))}
            </div>
        </>
    );

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Character Stats</h1>
            {renderStats(baseStats, "Base Stats")}
            {renderStats(skillStats, "Skill Stats")}
        </div>
    );
}

export default App