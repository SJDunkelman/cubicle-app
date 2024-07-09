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
        { event_type: 'Info', value: 'Application started' },
        { event_type: 'Warning', value: 'Low memory' },
        { event_type: 'Error', value: 'Failed to connect to database' },
        { event_type: 'Info', value: 'User logged in' },
        { event_type: 'Info', value: 'User logged in' },
        { event_type: 'Info', value: 'User logged in' },
        { event_type: 'Info', value: 'User logged in' },
        { event_type: 'Info', value: 'User logged in' },
        { event_type: 'Info', value: 'User logged in User' },
        { event_type: 'Info', value: 'User logged in' },
        { event_type: 'Info', value: 'User logged in' },
        { event_type: 'Info', value: 'User logged in' },
        { event_type: 'Info', value: 'User logged in' },
        { event_type: 'Info', value: 'User logged in' },
        { event_type: 'Info', value: 'User logged in' },
        { event_type: 'Info', value: 'User logged in' },
        { event_type: 'Info', value: 'User logged in' },
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
                        <p className="text-2xl">36k</p>
                    </div>
                    <div className="flex flex-col">
                        <p className="text-xs">Right Clicks</p>
                        <p className="text-2xl">36k</p>
                    </div>
                    <div className="flex flex-col">
                        <p className="text-xs">Keypresses</p>
                        <p className="text-2xl">36k</p>
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