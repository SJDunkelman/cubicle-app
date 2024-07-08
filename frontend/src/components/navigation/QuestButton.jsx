import { ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons';

const QuestsButton = () => {
    return (
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

            <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="py-2">
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Option 1</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Option 2</a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Option 3</a>
                </div>
            </div>
        </div>
    );
};

export default QuestsButton;