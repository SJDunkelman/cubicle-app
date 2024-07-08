import React, { useState } from "react";
import { ChevronLeftIcon } from "@radix-ui/react-icons";
import { ThumbsUp, ThumbsDown } from "lucide-react";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import SkillIcon from "@/components/quest/SkillIcon.jsx";

import questImage from "../../assets/images/quests/building_1.png";

export default function QuestSummary() {
    const [isHovering, setIsHovering] = useState(true);

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    return (
        <div className="relative w-screen h-screen overflow-clip">
            <img src={questImage} alt="Quest Background" className="w-full h-full object-cover"/>
            <div className="absolute top-10 left-4">
                <Button variant="ghost" className="text-white bg-white/25">
                    <ChevronLeftIcon className="w-8 h-8" />
                </Button>
            </div>
            <div
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <Card className={`w-[500px] drop-shadow transition-opacity duration-300 ${isHovering ? 'bg-white/75' : 'opacity-10'}`}>
                    <CardHeader>
                        <CardTitle className="text-xl">Quest Summary</CardTitle>
                        <CardDescription className="text-gray-600">Reward: <span className="text-green font-bold">1000 XP</span></CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className="mb-4">A local Chieftain has requested you fortify his village against nearby
                            raiders who have been attacking them. His rangers have spotted them growing in size and he is worried
                            they cannot fend off the next attack.</p>
                        <div className="flex items-center justify-left space-x-4 p-2">
                            <ThumbsUp className="text-green w-10 h-10 flex-shrink-0"/>
                            <div className="flex space-x-2 items-center">
                                <SkillIcon skillName="agility"/>
                                <SkillIcon skillName="strength"/>
                                <SkillIcon skillName="speed"/>
                            </div>
                        </div>
                        <div className="flex items-center justify-left space-x-4 p-2">
                            <ThumbsDown className="text-red w-10 h-10 flex-shrink-0"/>
                            <div className="flex space-x-2 items-center">
                                <SkillIcon skillName="agility"/>
                                <SkillIcon skillName="strength"/>
                                <SkillIcon skillName="speed"/>
                            </div>
                        </div>
                        <div>
                            <p className="text-sm font-light">Log</p>
                            <div className="bg-night p-3 rounded font-jetbrains text-sm h-20 overflow-auto">
                                <p className="text-green">$ You enter the village</p>
                                <p className="text-green">&gt; "Some help would be nice!"</p>
                                <p className="text-green">=&gt; Strength +5</p>
                                <p className="text-green">$ You enter the village</p>
                                <p className="text-green">&gt; "Some help would be nice!"</p>
                                <p className="text-green">=&gt; Strength +5</p>
                            </div>
                        </div>
                    </CardContent>
                    <CardFooter className="flex items-center justify-center">
                        <Button className="bg-red hover:bg-light_red">Quit</Button>
                    </CardFooter>
                </Card>
            </div>
        </div>
    );
}