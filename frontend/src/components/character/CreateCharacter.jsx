import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ReloadIcon } from "@radix-ui/react-icons";
import { RefreshCcw } from "lucide-react";

// Placeholder for character image
import dwarfImage from '../../assets/images/dwarf.png';
import elfImage from "../../assets/images/elf.png";

export default function CreateCharacter() {
    const [character, setCharacter] = useState({
        name: "Jon Snow",
        description: "A nimble rogue with a mysterious past, Aria excels in stealth and quick thinking. Her piercing green eyes and jet-black hair make her stand out in any crowd, though she prefers to stick to the shadows.",
        image: dwarfImage
    });

    const [isGenerating, setIsGenerating] = useState(false);

    const handleRegenerate = async () => {
        setIsGenerating(true);
        // Here you would typically call an API to generate a new character
        // For this example, we'll just use a timeout to simulate an API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        setCharacter({
            name: "Thorne Ironheart",
            description: "A stalwart warrior with an unbreakable spirit, Thorne is as dependable as the mountains themselves. His scarred visage and steely gaze speak of countless battles fought and won.",
            image: elfImage
        });
        setIsGenerating(false);
    };

    const handleAccept = () => {
        // Here you would typically save the character or move to the next step
        console.log("Character accepted:", character);
    };

    return (
        <Card className="w-[800px] bg-white/75 drop-shadow">
            <CardContent className="p-6">
                <div className="flex">
                    <div className="flex-1 pr-6">
                        <h2 className="text-2xl font-bold mb-2">{character.name}</h2>
                        <p className="text-gray-700">{character.description}</p>
                    </div>
                    <div className="flex-shrink-0">
                        <img
                            src={character.image}
                            alt={character.name}
                            className="w-64 h-64 object-cover rounded-lg"
                        />
                    </div>
                </div>
            </CardContent>
            <CardFooter className="flex justify-center space-x-4">
                <Button
                    onClick={handleRegenerate}
                    variant="icon"
                    disabled={isGenerating}
                    className="bg-red hover:bg-light_red text-white"
                >
                    <RefreshCcw className="w-4 h-4" />
                </Button>
                <Button
                    onClick={handleAccept}
                    className="bg-green hover:bg-light_green text-white w-24"
                >
                    Accept
                </Button>
            </CardFooter>
        </Card>
    );
}