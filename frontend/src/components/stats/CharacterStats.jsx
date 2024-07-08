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

    const renderStats = (stats, title) => (
        <div className="flex flex-col justify-between h-max border-2">
            <h2 className="text-xl font-bold my-4 text-white font-menlo">{title}</h2>
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
        </div>
    );

    return (
        <div className="flex items-center justify-center max-h-[500px]">
            <Button
                onClick={toggleStats}
                variant="outline"
                size="icon"
                className="mr-4"
                disabled={showBaseStats}
            >
                <ChevronLeftIcon className="h-4 w-4" />
            </Button>

            <div className="flex-grow max-w-3xl">
                {showBaseStats
                    ? renderStats(baseStats, "Base Stats")
                    : renderStats(skillStats, "Skill Stats")}
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