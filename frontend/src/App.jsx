import React from 'react';
import { NotificationService } from "../bindings/changeme";
import NavigationBar from "@/components/navigation/NavigationBar.jsx";
import CharacterStats from "@/components/stats/CharacterStats.jsx";
import NewQuest from "@/components/quest/NewQuest.jsx";
import QuestSummary from "@/components/quest/QuestSummary.jsx";
import CreateCharacter from "@/components/character/CreateCharacter.jsx";
import Overview from "@/components/overview/Overview.jsx"
import appStore from "@/store/appStore.js";
import ActiveQuests from "@/components/quest/ActiveQuests.jsx";
import Settings from "@/components/settings/Settings.jsx";

function App() {
    const { currentPage } = appStore();

    const showNotification = () => {
        NotificationService.ShowNotification("Hello!", "This is a test notification.")
            .catch(err => console.error("Failed to show notification:", err));
    };

    const renderPage = () => {
        switch(currentPage) {
            case 'overview':
                return <Overview />;
            case 'new_character':
                return <CreateCharacter />
            case 'stats':
                return <CharacterStats />;
            case 'new_quest':
                return <NewQuest />;
            case 'quest_summary':
                return <QuestSummary />;
            case 'active_quests':
                return <ActiveQuests />;
            case 'create_character':
                return <CreateCharacter />;
            case 'settings':
                return <Settings />;
            default:
                return <Overview />;  // Default to Overview if page is not recognized
        }
    };

    return (
        <div className="flex flex-col mx-auto h-screen w-screen pt-7 px-2 bg-black font-menlo">
            <div className="z-50">
                <NavigationBar />
            </div>

            <div className="flex-grow overflow-auto">
                <div className="flex items-center justify-center h-full p-7 z-0">
                    {renderPage()}
                </div>
            </div>
        </div>
    );
}

export default App;