import React from 'react';
import CharacterStats from './components/stats/CharacterStats.jsx';
import { NotificationService } from "../bindings/changeme";
import {Button} from "@/components/ui/button.jsx";
import NewQuest from "@/components/quest/NewQuest.jsx";
import QuestSummary from "@/components/quest/QuestSummary.jsx";
import CreateCharacter from "@/components/character/CreateCharacter.jsx";

function App() {
    const showNotification = () => {
        NotificationService.ShowNotification("Hello!", "This is a test notification.")
            .catch(err => console.error("Failed to show notification:", err));
    };

    return (
        <div className="container mx-auto bg-purple min-h-screen w-screen">
            {/*<h1 className="text-2xl font-bold mb-4 text-white">Character Stats</h1>*/}
            {/*<CharacterStats />*/}
            {/*<NewQuest />*/}
            {/*<QuestSummary />*/}
            <CreateCharacter />
        </div>
    );
}

export default App;