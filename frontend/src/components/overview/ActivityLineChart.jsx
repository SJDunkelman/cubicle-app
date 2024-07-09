import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const generateTimeLabel = (index) => {
    const hours = Math.floor((index * 10) / 60);
    const minutes = (index * 10) % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
};

const generateData = () => {
    const data = [];
    for (let i = 0; i < 144; i++) {
        const timeOfDay = i * 10; // minutes since midnight
        const isActiveHours = timeOfDay >= 480 && timeOfDay < 1320; // 8:00 to 22:00

        let leftClicks, rightClicks, scrollDistance, scrollTime, keystrokes;

        if (isActiveHours) {
            leftClicks = Math.floor(Math.random() * 50) + 10;
            rightClicks = Math.floor(Math.random() * 20) + 5;
            scrollDistance = Math.floor(Math.random() * 2000) + 500;
            scrollTime = Math.floor(Math.random() * 120) + 30;
            keystrokes = Math.floor(Math.random() * 200) + 50;
        } else {
            leftClicks = Math.floor(Math.random() * 5);
            rightClicks = Math.floor(Math.random() * 2);
            scrollDistance = Math.floor(Math.random() * 100);
            scrollTime = Math.floor(Math.random() * 10);
            keystrokes = Math.floor(Math.random() * 20);
        }

        data.push({
            time: generateTimeLabel(i),
            leftClicks,
            rightClicks,
            scrollDistance,
            scrollTime,
            keystrokes,
        });
    }
    return data;
};

const data = generateData();

export default class ActivityLineChart extends PureComponent {

    render() {
        return (
            <ResponsiveContainer className="w-full h-full">
                <LineChart
                    data={data}
                >
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255, 255, 255, 0.25)" />
                    <XAxis
                        dataKey="time"
                        stroke="white"
                        interval={17}  // Show tick every 3 hours (18 * 10 minutes)
                        tickFormatter={(time) => {
                            const hours = time.split(':')[0];
                            return `${hours}:00`;
                        }} // Only show hours
                    />
                    <YAxis
                        stroke="white"
                        tickCount={7}
                        domain={[0, 3000]}
                        ticks={[0, 500, 1000, 1500, 2000, 2500, 3000]}
                    />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="leftClicks" stroke="var(--color-blue)" dot={false} />
                    <Line type="monotone" dataKey="rightClicks" stroke="var(--color-green)" dot={false} />
                    <Line type="monotone" dataKey="scrollDistance" stroke="var(--color-yellow)" dot={false} />
                    <Line type="monotone" dataKey="scrollTime" stroke="var(--color-red)" dot={false} />
                    <Line type="monotone" dataKey="keystrokes" stroke="var(--color-light_green)" dot={false} />
                </LineChart>
            </ResponsiveContainer>
        );
    }
}