import React, { useState } from 'react';
import dwarfImage from '/src/assets/images/dwarf.png';
import appStore from "@/store/appStore.js";
import Console from "@/components/overview/Console.jsx";
import UsagePieChart from "@/components/overview/UsagePieChart.jsx"
import {Button} from "@/components/ui/button.jsx";
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import ActivityLineChart from "@/components/overview/ActivityLineChart.jsx";

export default function Overview() {
    const { selectedCharacter } = appStore();
    const [activityStats, setActivityStats] = useState(true);

    const toggleActivity = () => {
        setActivityStats(!activityStats);
    };

    // Assuming we have a level in the character data. If not, you'll need to fetch or calculate it.
    const characterLevel = 1;
    const currentXP = 75; // Example value
    const nextLevelXP = 100;

    const progress = (currentXP / nextLevelXP) * 100;
    const strokeDasharray = `${progress} ${100 - progress}`;

    const consoleLines = [
        {
            event_type: "message",
            content: "Greetings, brave adventurer! The Chieftain's village needs our help. Are you ready to fortify the frontier?"
        },
        {
            event_type: "positive_event",
            content: "You've started gathering resources for the fortifications. The villagers are hopeful!"
        },
        {
            event_type: "xp",
            skill: "Construction",
            amount: 50,
            content: "Your Construction skill has increased! Keep building those defenses!"
        },
        {
            event_type: "message",
            content: "The perimeter wall is taking shape. How are those web components coming along?"
        },
        {
            event_type: "negative_event",
            content: "Oh no! You've been spotted browsing social media. The raiders have noticed a gap in our defenses!"
        },
        {
            event_type: "message",
            content: "Quick! We need to refocus on strengthening the village's weak points. Can you work on securing the user authentication?"
        },
        {
            event_type: "positive_event",
            content: "Excellent work on the login system! The village gate is now more secure than ever."
        },
        {
            event_type: "xp",
            skill: "Intelligence",
            amount: 75,
            content: "Your Intelligence has grown! Your clever design choices are paying off."
        },
        {
            event_type: "message",
            content: "The raiders are approaching! We need to finish the defensive structures. How's the frontend coming along?"
        },
        {
            event_type: "negative_event",
            content: "Your inactivity has left the eastern wall unfinished. The raiders are exploiting this weakness!"
        },
        {
            event_type: "message",
            content: "We can still turn this around! Focus on completing the user interface to rally the villagers."
        },
        {
            event_type: "positive_event",
            content: "The UI is looking great! The villagers are inspired by the sleek design and have redoubled their efforts."
        },
        {
            event_type: "xp",
            skill: "Creativity",
            amount: 60,
            content: "Your Creativity has increased! The village defenses are both functional and aesthetically pleasing."
        },
        {
            event_type: "message",
            content: "The raiders are at our doorstep! Quick, implement the final features to repel them!"
        },
        {
            event_type: "positive_event",
            content: "Victory! Your web app is complete, and the village stands strong. The raiders retreat, defeated by your ingenuity!"
        },
        {
            event_type: "xp",
            skill: "Wisdom",
            amount: 100,
            content: "Your Wisdom has greatly increased! You've learned valuable lessons about project management and perseverance."
        },
        {
            event_type: "message",
            content: "Congratulations, hero! The Chieftain is overjoyed. Your web app has saved the village. What challenges will you take on next?"
        }
    ];

    return (
        <div className="flex flex-col space-y-4 h-full font-menlo">
            <div className="w-full flex items-top justify-center h-min">
                <div className="w-2/5 relative rounded-xl h-[40vh]">
                    <img
                        src={dwarfImage}
                        alt="Character"
                        className="w-full h-full object-contain rounded-xl"
                    />
                    <div className="absolute bottom-2 right-2 w-12 h-12">
                        <svg viewBox="0 0 36 36" className="w-full h-full">
                            <path
                                d="M18 2.0845
                                    a 15.9155 15.9155 0 0 1 0 31.831
                                    a 15.9155 15.9155 0 0 1 0 -31.831"
                                fill="none"
                                stroke="#444"
                                strokeWidth="2"
                            />
                            <path
                                d="M18 2.0845
                                    a 15.9155 15.9155 0 0 1 0 31.831
                                    a 15.9155 15.9155 0 0 1 0 -31.831"
                                fill="none"
                                stroke="#4CAF50"
                                strokeWidth="2"
                                strokeDasharray={strokeDasharray}
                                strokeLinecap="round"
                            />
                            <text x="18" y="23" className="fill-white text-sm" textAnchor="middle">
                                {characterLevel}
                            </text>
                        </svg>
                    </div>
                </div>
                <div className="w-3/5 p-4 text-white">
                    <div className="mb-4">
                        <p className="font-light text-xs">Active Quest</p>
                        <p className="text-xl tracking-wide leading-tight">Fortify the Frontier this is a long title</p>
                    </div>

                    <Console lines={consoleLines}/>
                </div>
            </div>

            <div className="flex-grow flex flex-col w-full relative pt-6">
                <span className="absolute -top-0 left-0 bg-white px-2 text-xs text-black opacity-80">
                    Last 24 hours
                  </span>
                <div className="flex items-center justify-evenly mb-4 px-4 w-full h-16  rounded-md text-white">
                    <div className="flex flex-col">
                        <p className="text-xs">Left Clicks</p>
                        <p className="text-2xl">1.2k</p>
                    </div>
                    <div className="flex flex-col">
                        <p className="text-xs">Right Clicks</p>
                        <p className="text-2xl">784</p>
                    </div>
                    <div className="flex flex-col">
                        <p className="text-xs">Keypresses</p>
                        <p className="text-2xl">30.2k</p>
                    </div>
                    <div className="flex flex-col">
                        <p className="text-xs">Mouse Movement</p>
                        <div className="flex items-end space-x-1">
                            <p className="text-2xl">109k</p>
                            <span className="text-xs mb-1">feet</span>
                        </div>

                    </div>
                    <div className="flex flex-col">
                        <p className="text-xs">Scroll Time</p>
                        <div className="flex items-end space-x-1">
                            <p className="text-2xl">21</p>
                            <span className="text-xs mb-1">hours</span>
                        </div>
                    </div>
                </div>

                <div
                    className="w-full flex-grow rounded-md relative px-8 flex items-center justify-center">
                    {!activityStats && (
                        <Button
                            onClick={toggleActivity}
                            variant="outline"
                            size="icon"
                            className="bg-white/75 absolute left-2"
                        >
                            <ChevronLeftIcon className="h-4 w-4"/>
                        </Button>
                    )}

                    <div className="w-[90%] h-full flex justify-center">
                        {activityStats ? (
                            <ActivityLineChart />
                        ) : (
                            <UsagePieChart/>
                        )}
                    </div>

                    {activityStats && (
                        <Button
                            onClick={toggleActivity}
                            variant="outline"
                            size="icon"
                            className="bg-white/75 absolute right-2"
                        >
                            <ChevronRightIcon className="h-4 w-4"/>
                        </Button>
                    )}
                </div>
            </div>

        </div>
    )
}