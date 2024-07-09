import React, { useState, useEffect } from 'react';
import { CharacterStatsService } from "../../../bindings/changeme";
import StatCard from './StatCard.jsx';
import { Button } from "@/components/ui/button";
import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons';

const CharacterStats = () => {
    const [baseStats, setBaseStats] = useState({});
    const [skillStats, setSkillStats] = useState({});
    const [nextLevelXP, setNextLevelXP] = useState({});
    const [showBaseStats, setShowBaseStats] = useState(true);

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

    const toggleStats = () => {
        setShowBaseStats(!showBaseStats);
    };

    const renderStats = (stats) => (
        <div className="grid grid-cols-3 gap-2 justify-items-center content-start h-full p-4">
            {Object.entries(stats).map(([name, stat]) => (
                <StatCard
                    key={name}
                    name={name}
                    stat={stat}
                    nextLevelXP={nextLevelXP[name]}
                />
            ))}
        </div>
    );

    return (
        <div className="flex items-center justify-center h-full">
            <Button
                onClick={toggleStats}
                variant="outline"
                size="icon"
                className="mr-4"
                disabled={showBaseStats}
            >
                <ChevronLeftIcon className="h-4 w-4" />
            </Button>

            <div className="flex-grow max-w-3xl h-full flex flex-col">
                <h2 className="text-xl font-bold mb-1 text-white font-menlo text-center">
                    {showBaseStats ? "Base Stats" : "Skill Stats"}
                </h2>
                <div className="flex-grow overflow-hidden items-center justify-center">
                    {showBaseStats
                        ? renderStats(baseStats)
                        : renderStats(skillStats)}
                </div>
            </div>

            <Button
                onClick={toggleStats}
                variant="outline"
                size="icon"
                className="ml-4"
                disabled={!showBaseStats}
            >
                <ChevronRightIcon className="h-4 w-4" />
            </Button>
        </div>
    );
};

export default CharacterStats;