import React from 'react';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";

import agilityIcon from '../../assets/icons/agility.png';
import charismaIcon from '../../assets/icons/charisma.png';
import creativityIcon from '../../assets/icons/creativity.png';
import dexterityIcon from '../../assets/icons/dexterity.png';
import enduranceIcon from '../../assets/icons/endurance.png';
import intelligenceIcon from '../../assets/icons/intelligence.png';
import marksmanshipIcon from '../../assets/icons/marksmanship.png';
import perceptionIcon from '../../assets/icons/perception.png';
import speedIcon from '../../assets/icons/speed.png';
import staminaIcon from '../../assets/icons/stamina.png';
import stealthIcon from '../../assets/icons/stealth.png';
import strengthIcon from '../../assets/icons/strength.png';
import wisdomIcon from '../../assets/icons/wisdom.png';

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

const SkillIcon = ({ skillName }) => {
    const iconSrc = skillIcons[skillName.toLowerCase()];
    const capitalizedSkillName = skillName.charAt(0).toUpperCase() + skillName.slice(1);

    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                        <img
                            src={iconSrc}
                            alt={`${capitalizedSkillName} icon`}
                            className="w-14 h-14 object-fill rounded"
                        />
                </TooltipTrigger>
                <TooltipContent side="bottom" align="center" className=" mr-4">
                    <p>{capitalizedSkillName}</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
};

export default SkillIcon;