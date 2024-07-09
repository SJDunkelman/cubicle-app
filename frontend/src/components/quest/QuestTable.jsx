import React, {useState, useEffect} from 'react';
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import appStore from "@/store/appStore.js";

import BuildingImage from "../../assets/images/quests/building_1.png";
import AttackImage from "../../assets/images/quests/attack_1.png";
import EscapeImage from "../../assets/images/quests/escape_1.png";

// Import all quest images
// const questImages = import.meta.glob('../../assets/images/quests/*.png');

const quests = [
    {
        id: 1,
        title: "Defend the Village",
        description: "Fortify the village against raiders",
        xpReward: 1000,
        expiryTimestamp: Date.now() + 3 * 24 * 60 * 60 * 1000,
        image: AttackImage,
        successRate: 50,
    },
    {
        id: 2,
        title: "Rescue the Princess",
        description: "Infiltrate the dragon's lair",
        xpReward: 2000,
        expiryTimestamp: Date.now() + 5 * 24 * 60 * 60 * 1000,
        image: BuildingImage,
        successRate: 25,
    },
    {
        id: 3,
        title: "Collect Rare Herbs",
        description: "Find healing herbs in the dark forest",
        xpReward: 500,
        expiryTimestamp: Date.now() + 2 * 24 * 60 * 60 * 1000,
        image: EscapeImage,
        successRate: 95,
    },
]

// quests.forEach(quest => {
//     quest.image = questImages[quest.imagePath];
// });

function calculateRemainingTime(expiryTimestamp) {
    const now = Date.now();
    const remainingTime = expiryTimestamp - now;

    if (remainingTime <= 0) {
        return "Expired";
    }

    const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));

    if (days > 0) {
        return `${days} day${days > 1 ? 's' : ''}`;
    } else if (hours > 0) {
        return `${hours} hour${hours > 1 ? 's' : ''}`;
    } else {
        return `${minutes} minute${minutes > 1 ? 's' : ''}`;
    }
}

export function QuestTable() {
    const { selectedQuest, setSelectedQuest } = appStore();
    const [currentTime, setUpdateTime] = useState(Date.now());

    useEffect(() => {
        const timer = setInterval(() => {
            setUpdateTime(Date.now());
        }, 60000); // Update every minute

        return () => clearInterval(timer);
    }, []);

    const getSuccessRateColor = (rate) => {
        if (rate <= 25) return "text-light_red";
        if (rate <= 75) return "text-yellow";
        return "text-light_green";
    }

    return (
        <Table className="font-menlo border-[1px] border-white/75">
            <TableCaption className="text-light_grey text-xs">Active Quests</TableCaption>
            <TableHeader>
                <TableRow className="border-b-[1px] border-white/75">
                    <TableHead className="text-white">Title</TableHead>
                    <TableHead className="text-white">Description</TableHead>
                    <TableHead className="text-white">XP Reward</TableHead>
                    <TableHead className="text-white">Remaining Time</TableHead>
                    <TableHead className="text-white">Success Rate</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {quests.map((quest) => (
                    <TableRow
                        key={quest.id}
                        className={`cursor-pointer ${
                            selectedQuest?.id === quest.id
                                ? 'bg-white text-black hover:bg-white'
                                : 'hover:bg-light_grey/25'
                        }`}
                        onClick={() => setSelectedQuest(quest)}
                    >
                        <TableCell>{quest.title}</TableCell>
                        <TableCell>{quest.description}</TableCell>
                        <TableCell>{quest.xpReward} XP</TableCell>
                        <TableCell>{calculateRemainingTime(quest.expiryTimestamp)}</TableCell>
                        <TableCell className={getSuccessRateColor(quest.successRate)}>
                            {quest.successRate}%
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}