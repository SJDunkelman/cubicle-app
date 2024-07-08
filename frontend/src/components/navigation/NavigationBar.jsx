import ChevronIcon from "@/components/navigation/ChevronIcon.jsx";
import {Button} from "@/components/ui/button.jsx";
import CharacterSelect from "@/components/navigation/CharacterSelect.jsx";
import appStore from "@/store/appStore.js";
import {HomeIcon} from "@radix-ui/react-icons";

export default function NavigationBar(){
    const { setCurrentPage } = appStore();

    return (
        <header className="w-full px-4 py-2 flex justify-between items-center h-10">
            <CharacterSelect/>

            <div className="flex space-x-4">
                <Button
                    variant="icon"
                    className="hover:bg-jet p-1"
                    onClick={() => setCurrentPage("overview")}
                >
                    <HomeIcon className="h-5 w-5 text-white" />
                </Button>
                <div className="relative group">
                    <Button
                        className="flex items-center space-x-1 px-4 py-2 hover:bg-jet hover:text-white text-white rounded-md transition-colors duration-300 w-min"
                        variant="ghost"
                    >
                        <span className="font-menlo">Quests</span>
                        <ChevronIcon/>
                    </Button>

                    <div
                        className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-48 bg-black border-[1px] border-white/50 shadow-lg rounded-md overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="py-2 font-menlo">
                            <Button
                                className="block px-4 py-2 text-sm text-white hover:text-light_green hover:no-underline w-full text-left transition-all duration-300"
                                variant="link"
                                onClick={() => setCurrentPage("new_quest")}
                            >
                                New Quest
                            </Button>
                            <Button
                                className="block px-4 py-2 text-sm text-white hover:text-light_green hover:no-underline w-full text-left transition-all duration-300"
                                variant="link"
                                onClick={() => setCurrentPage("active_quests")}
                            >
                                Active Quests
                            </Button>
                        </div>
                    </div>
                </div>
                <Button
                    className="flex items-center space-x-1 px-4 py-2 hover:bg-jet hover:text-white text-white rounded-md transition-colors duration-300 w-min"
                    variant="ghost"
                    onClick={() => setCurrentPage("stats")}
                >
                    Stats
                </Button>
                <Button
                    className="flex items-center space-x-1 px-4 py-2 hover:bg-jet hover:text-white text-white rounded-md transition-colors duration-300 w-min"
                    variant="ghost"
                    onClick={() => setCurrentPage("settings")}
                >
                    Settings
                </Button>
            </div>
        </header>
    )
};