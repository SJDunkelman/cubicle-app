import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const data = [
    { name: 'communication', value: 57 },
    { name: 'gaming', value: 13 },
    { name: 'entertainment', value: 13 },
    { name: 'coding', value: 7 },
    { name: 'research', value: 3 },
    { name: 'dossing', value: 3 },
    { name: 'bullshit', value: 1 },
];

const COLORS = ['green', 'red', 'yellow', 'blue', 'light_red', 'light_blue', 'light_yellow'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, outerRadius, percent, index }) => {
    const radius = outerRadius * 1.2;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    // Only render label if value is 3 or greater
    if (data[index].value >= 3) {
        return (
            <text
                x={x}
                y={y}
                fill={`var(--color-${COLORS[index % COLORS.length]})`}
                textAnchor={x > cx ? 'start' : 'end'}
                dominantBaseline="central"
                className="text-sm font-light font-menlo"
            >
                {`${data[index].name} ${(percent * 100).toFixed(0)}%`}
            </text>
        );
    }
    return null;
};

const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        return (
            <div className="custom-tooltip bg-transparent text-sm font-semibold">
                <p style={{ color: 'white', fontWeight: 600, fontFamily: 'Menlo' }}>{`${payload[0].name}: ${payload[0].value}`}</p>
            </div>
        );
    }
    return null;
};

export default function UsagePieChart(){
    return (
        <ResponsiveContainer className="w-full h-full">
            <PieChart>
                <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={renderCustomizedLabel}
                    innerRadius={30}
                    outerRadius={60}
                    fill="#8884d8"
                    dataKey="value"
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={`var(--color-${COLORS[index % COLORS.length]})`} />
                    ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
            </PieChart>
        </ResponsiveContainer>
    );
}