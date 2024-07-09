// components/quest/NewQuest.jsx
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { ReloadIcon } from "@radix-ui/react-icons";
import {ThumbsDown, ThumbsUp} from "lucide-react";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import questImage from "../../assets/images/quests/building_1.png";
import SkillIcon from "@/components/quest/SkillIcon.jsx";

const completionTimes = [
    "30 minutes", "1 hour", "2 hours", "3 hours", "6 hours", "12 hours",
    "1 day", "2 days", "3 days", "4 days", "5 days", "6 days", "7 days"
];

export default function NewQuest() {
    const [sliderValue, setSliderValue] = useState(0);
    const [description, setDescription] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [questCreated, setQuestCreated] = useState(false);

    const handleSliderChange = (value) => {
        setSliderValue(value[0]);
    };

    const handleSubmit = async () => {
        if (description.trim().split(/\s+/).length < 3) {
            setError("You must write at least a few words");
            return;
        }
        setError("");
        setLoading(true);
        await new Promise(resolve => setTimeout(resolve, 1000));
        setLoading(false);
        setQuestCreated(true);
    };

    const handleReject = () => {
        setQuestCreated(false);
        setLoading(false);
        setDescription("");
        setError("");
    };

    if (questCreated) {
        return (
            <div className="relative w-full h-full overflow-hidden">
                <img
                    src={questImage}
                    alt="Quest Background"
                    className="absolute w-full h-full object-cover object-center rounded-md z-0"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                    <Card className="w-[350px] bg-white/75 drop-shadow">
                        <CardHeader>
                            <CardTitle className="text-xl">New Quest</CardTitle>
                            <CardDescription className="text-gray-600">Reward: <span className="text-green font-bold">1000 XP</span></CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="">A local Chieftain has requested you fortify his village against nearby
                                raiders who have
                                been attacking them. His rangers have spotted them growing in size and he is worried
                                they cannot fend off the next attack.</p>
                            <div className="flex items-center justify-left space-x-4 p-2">
                                <ThumbsUp className="text-green w-10 h-10 flex-shrink-0"/>
                                <div className="flex space-x-2 items-center">
                                    <SkillIcon skillName="agility"/>
                                    <SkillIcon skillName="strength"/>
                                    <SkillIcon skillName="speed"/>
                                </div>
                            </div>
                            <div className="flex items-center justify-left space-x-4 p-2">
                                <ThumbsDown className="text-red w-10 h-10 flex-shrink-0"/>
                                <div className="flex space-x-2 items-center">
                                    <SkillIcon skillName="agility"/>
                                    <SkillIcon skillName="strength"/>
                                    <SkillIcon skillName="speed"/>
                                </div>
                            </div>
                        </CardContent>
                        <CardFooter className="flex space-x-4 items-center justify-center">
                            <Button onClick={handleReject} className="bg-red hover:bg-light_red">Reject</Button>
                            <Button className="bg-green hover:bg-light_green">Accept</Button>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        );
    }

    return (
        <div className="flex flex-col items-center justify-center max-h-[500px] gap-6 w-full max-w-sm">
            {!loading ? (
                <>
                    <div className="grid w-full items-center gap-1.5">
                    <Label htmlFor="description" className="text-slate-300">Describe what you're working on</Label>
                        <Input
                            id="description"
                            className={`${error ? 'border-red' : ''} text-white placeholder:text-white/50`}
                            placeholder="I'm building an app"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                        {error && <p className="text-red text-sm mt-1">{error}</p>}
                    </div>
                    <div className="w-full">
                        <Label htmlFor="completion-time" className="text-slate-300">Completion time</Label>
                        <Slider
                            id="completion-time"
                            className="pt-2 accent-white"
                            defaultValue={[0]}
                            max={completionTimes.length - 1}
                            step={1}
                            onValueChange={handleSliderChange}
                        />
                        <p className="text-sm text-white mt-2 text-center">{completionTimes[sliderValue]}</p>
                    </div>
                </>
            ) : (
                <ReloadIcon className="mr-2 h-4 w-4 animate-spin text-white" />
            )}
            <Button onClick={handleSubmit} disabled={loading}>
                {loading ? "Creating..." : "Create"}
            </Button>
        </div>
    );
}