import ChevronIcon from './ChevronIcon';
import DropdownMenu from './DropdownMenu';
import { Button } from "@/components/ui/button.jsx";
import { PlusIcon } from "@radix-ui/react-icons";
import appStore from "@/store/appStore.js";

export default function CharacterSelect({ pageName }){
    const { currentPage, selectedCharacter, setCurrentPage } = appStore();

    return (
    <div className="relative group">
        <h1 className="text-white flex items-center space-x-2 cursor-pointer">
            <span>{currentPage} <span className="text-yellow">~</span> {selectedCharacter}</span>
            <ChevronIcon />
        </h1>
        <DropdownMenu>
            <Button
                className="w-full flex justify-start p-2 text-sm text-white hover:text-light_green transition-all duration-300 text-left hover:bg-transparent"
                variant="ghost"
                onClick={() => setCurrentPage("new_character")}
            >
                <PlusIcon className="w-4 h-4 mr-2" /> <p>Create New Character</p>
            </Button>
        </DropdownMenu>
    </div>
);
}