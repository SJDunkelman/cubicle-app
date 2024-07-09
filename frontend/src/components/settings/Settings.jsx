import React from 'react';
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import appStore from "@/store/appStore.js";

export default function Settings() {
    const {
        questNotifications,
        setQuestNotifications,
        chatNotifications,
        setChatNotifications,
        chatFrequency,
        setChatFrequency
    } = appStore();

    return (
        <div className="p-6 space-y-6 text-white">
            {/*<h2 className="text-2xl font-bold mb-4 text-center">Settings</h2>*/}

            <div className="flex items-center space-x-2">
                <Switch
                    id="quest-notifications"
                    checked={questNotifications}
                    onCheckedChange={setQuestNotifications}
                />
                <Label htmlFor="quest-notifications">Quest Notifications</Label>
            </div>

            <div className="flex items-center space-x-2">
                <Switch
                    id="chat-notifications"
                    checked={chatNotifications}
                    onCheckedChange={setChatNotifications}
                />
                <Label htmlFor="chat-notifications">Chat Notifications</Label>
            </div>

            <div className="space-y-2">
                <Label htmlFor="chat-frequency">Max Frequency of Chat Messages</Label>
                <Select
                    disabled={!chatNotifications}
                    value={chatFrequency}
                    onValueChange={setChatFrequency}
                >
                    <SelectTrigger className="w-full bg-white/25">
                        <SelectValue placeholder="Select frequency" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="low">Low (Every 30 minutes)</SelectItem>
                        <SelectItem value="normal">Normal (Every 15 minutes)</SelectItem>
                        <SelectItem value="high">High (Every 5 minutes)</SelectItem>
                    </SelectContent>
                </Select>
            </div>
        </div>
    );
}