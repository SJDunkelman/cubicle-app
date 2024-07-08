import {ChevronDownIcon, ChevronUpIcon} from "@radix-ui/react-icons";

const ChevronIcon = () => (
    <div className="relative w-4 h-4">
        <ChevronDownIcon className="absolute inset-0 transform transition-transform duration-300 group-hover:opacity-0 group-hover:rotate-180" />
        <ChevronUpIcon className="absolute inset-0 transform transition-transform duration-300 opacity-0 -rotate-180 group-hover:opacity-100 group-hover:rotate-0" />
    </div>
);

export default ChevronIcon;