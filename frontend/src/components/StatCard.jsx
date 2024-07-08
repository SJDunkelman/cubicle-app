import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

import agilityIcon from '../assets/icons/agility.png';
import charismaIcon from '../assets/icons/charisma.png';
import creativityIcon from '../assets/icons/creativity.png';
import dexterityIcon from '../assets/icons/dexterity.png';
import enduranceIcon from '../assets/icons/endurance.png';
import intelligenceIcon from '../assets/icons/intelligence.png';
import marksmanshipIcon from '../assets/icons/marksmanship.png';
import perceptionIcon from '../assets/icons/perception.png';
import speedIcon from '../assets/icons/speed.png';
import staminaIcon from '../assets/icons/stamina.png';
import stealthIcon from '../assets/icons/stealth.png';
import strengthIcon from '../assets/icons/strength.png';
import wisdomIcon from '../assets/icons/wisdom.png';

const skillIcons = {
    agility: agilityIcon,
    charisma: charismaIcon,
    creativity: creativityIcon,
    dexterity: dexterityIcon,
    endurance: enduranceIcon,
    intelligence: intelligenceIcon,
    marksmanship: marksmanshipIcon,
    perception: perceptionIcon,
    speed: speedIcon,
    stamina: staminaIcon,
    stealth: stealthIcon,
    strength: strengthIcon,
    wisdom: wisdomIcon,
};

const StatCard = ({ name, stat, nextLevelXP }) => {
    return (
        <Card className="w-[220px] m-2 font-jetbrains">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-0">
                <CardTitle className="text-lg font-bold">{name}</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="flex justify-between">
                    <div className="flex flex-col">
                        <p className="">Level {stat.level}</p>
                        <p className="text-xs text-muted-foreground">
                            XP: {stat.xp} / {nextLevelXP}
                        </p>
                    </div>
                    <img src={skillIcons[name.toLowerCase()]} alt={`${name} icon`} className="h-10 w-10"/>
                </div>
            </CardContent>
        </Card>
    );
};

export default StatCard;