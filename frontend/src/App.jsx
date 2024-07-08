import React from 'react';
import CharacterStats from './components/stats/CharacterStats.jsx';
import { NotificationService } from "../bindings/changeme";
import {Button} from "@/components/ui/button.jsx";
import NewQuest from "@/components/quest/NewQuest.jsx";
import QuestSummary from "@/components/quest/QuestSummary.jsx";
import CreateCharacter from "@/components/character/CreateCharacter.jsx";
import { ChevronDownIcon, ChevronUpIcon, PlusIcon } from '@radix-ui/react-icons';
import QuestsButton from "@/components/navigation/QuestButton.jsx";

function App() {
    const showNotification = () => {
        NotificationService.ShowNotification("Hello!", "This is a test notification.")
            .catch(err => console.error("Failed to show notification:", err));
    };

    return (
        <div className="flex flex-col mx-auto h-screen w-screen py-7 px-2 bg-black font-menlo">
            <header className="w-full px-4 py-2 flex justify-between items-center">
                <div className="relative group">
                    <h1 className="text-white flex items-center space-x-2 cursor-pointer">
                        <span>overview <span className="text-yellow">~</span> aria-bladesweep</span>
                        <div className="relative w-4 h-4">
                            <ChevronDownIcon
                                className="absolute inset-0 transform transition-transform duration-300 group-hover:opacity-0 group-hover:rotate-180"
                            />
                            <ChevronUpIcon
                                className="absolute inset-0 transform transition-transform duration-300 opacity-0 -rotate-180 group-hover:opacity-100 group-hover:rotate-0"
                            />
                        </div>
                    </h1>

                    <div className="absolute left-0 mt-2 w-full bg-black border-[1px] border-white/50 shadow-lg rounded-md overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="py-2 font-menlo">
                            <Button
                               className="w-full flex justify-start p-2 text-sm text-white hover:text-light_green transition-all duration-300 text-left hover:bg-transparent"
                               variant="ghost"
                            >
                                <PlusIcon className="w-4 h-4 mr-2" /> <p>Create New Character</p>
                            </Button>
                        </div>
                    </div>
                </div>

                <div className="flex space-x-4">
                    <div className="relative group">
                        <Button
                            className="flex items-center space-x-1 px-4 py-2 hover:bg-jet hover:text-white text-white rounded-md transition-colors duration-300 w-min"
                            variant="ghost"
                        >
                            <span className="font-menlo">Quests</span>
                            <div className="relative w-4 h-4">
                                <ChevronDownIcon
                                    className="absolute inset-0 transform transition-transform duration-300 group-hover:opacity-0 group-hover:rotate-180"
                                />
                                <ChevronUpIcon
                                    className="absolute inset-0 transform transition-transform duration-300 opacity-0 -rotate-180 group-hover:opacity-100 group-hover:rotate-0"
                                />
                            </div>
                        </Button>

                        <div
                            className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-48 bg-black border-[1px] border-white/50 shadow-lg rounded-md overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="py-2 font-menlo">
                                <Button
                                    className="block px-4 py-2 text-sm text-white hover:text-light_green hover:no-underline w-full text-left transition-all duration-300"
                                    variant="link"
                                >
                                    New Quest
                                </Button>
                                <Button
                                    className="block px-4 py-2 text-sm text-white hover:text-light_green hover:no-underline w-full text-left transition-all duration-300"
                                    variant="link"
                                >
                                    Active Quests
                                </Button>
                            </div>
                        </div>
                    </div>
                    <Button
                        className="flex items-center space-x-1 px-4 py-2 hover:bg-jet hover:text-white text-white rounded-md transition-colors duration-300 w-min"
                        variant="ghost"
                    >
                        Stats
                    </Button>
                    <Button
                        className="flex items-center space-x-1 px-4 py-2 hover:bg-jet hover:text-white text-white rounded-md transition-colors duration-300 w-min"
                        variant="ghost"
                    >
                        Settings
                    </Button>
                </div>
            </header>

            {/*<h1 className="text-2xl font-bold mb-4 text-white">Character Stats</h1>*/}
            {/*<CharacterStats />*/}
            {/*<NewQuest />*/}
            {/*<QuestSummary />*/}
            {/*<CreateCharacter />*/}
        </div>
    );
}

export default App;