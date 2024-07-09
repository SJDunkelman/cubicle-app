import appStore from "@/store/appStore.js";
import {QuestTable} from "@/components/quest/QuestTable.jsx";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card.jsx";


function calculateRemainingTime(expiryTimestamp) {
    const now = Date.now();
    const remainingTime = expiryTimestamp - now;

    if (remainingTime <= 0) {
        return "Expired";
    }

    const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
    const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));

    if (days > 0) {
        return `${days} day${days > 1 ? 's' : ''}`;
    } else if (hours > 0) {
        return `${hours} hour${hours > 1 ? 's' : ''}`;
    } else {
        return `${minutes} minute${minutes > 1 ? 's' : ''}`;
    }
}

export default function ActiveQuests() {
    const {selectedQuest, setSelectedQuest} = appStore();

    const getSuccessRateColor = (rate) => {
        if (rate < 25) return "text-red";
        if (rate < 75) return "text-blue";
        return "text-green";
    }

    return (
        <div className="flex flex-col h-full w-full">
            <div className="flex-grow flex h-1/2">
                {selectedQuest ? (
                    <>
                        <div className="w-1/2 p-4">
                            <img
                                src={selectedQuest.image}
                                alt={selectedQuest.title}
                                className="w-full h-full object-cover rounded-md"
                            />
                        </div>
                        <div className="w-1/2 p-4">
                            <Card className="h-full bg-transparent border-[1px] border-white/75 text-white">
                                <CardHeader>
                                    <CardTitle className="text-xl">{selectedQuest.title}</CardTitle>
                                    <CardDescription className="text-light_grey">XP Reward: {selectedQuest.xpReward}</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p>{selectedQuest.description}</p>
                                    <p>Remaining Time: {calculateRemainingTime(selectedQuest.expiryTimestamp)}</p>
                                    <p className={getSuccessRateColor(selectedQuest.successRate)}>
                                        Success Rate: {selectedQuest.successRate}%
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </>
                ) : (
                    <div className="w-full flex items-center justify-center">
                        <p className="text-white text-xl">Select a quest</p>
                    </div>
                )}
            </div>
            <div className="h-1/3 overflow-auto">
                <QuestTable />
            </div>
        </div>

    )
}
