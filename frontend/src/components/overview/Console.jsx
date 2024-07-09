import React, { useEffect, useRef, useState } from 'react';

const Console = ({ lines }) => {
    const consoleRef = useRef(null);
    const [typedText, setTypedText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (consoleRef.current) {
            consoleRef.current.scrollTop = consoleRef.current.scrollHeight;
        }
    }, [lines]);

    useEffect(() => {
        if (lines.length > 0 && currentIndex < lines[lines.length - 1].value.length) {
            const timer = setTimeout(() => {
                setTypedText(lines[lines.length - 1].value.slice(0, currentIndex + 1));
                setCurrentIndex(currentIndex + 1);
            }, 50);

            return () => clearTimeout(timer);
        }
    }, [lines, currentIndex]);

    const renderLine = (line, index) => {
        const isLastLine = index === lines.length - 1;
        return (
            <div key={index} className="font-menlo text-xs">
        <span className={`mr-2 ${getEventTypeColor(line.event_type)}`}>
          {line.event_type}:
        </span>
                <span>
          {isLastLine ? typedText : line.value}
                    {isLastLine && <Cursor />}
        </span>
            </div>
        );
    };

    const getEventTypeColor = (eventType) => {
        switch (eventType.toLowerCase()) {
            case 'error':
                return 'text-red';
            case 'warning':
                return 'text-yellow';
            case 'info':
                return 'text-blue';
            default:
                return 'text-light_grey';
        }
    };

    return (
        <div
            ref={consoleRef}
            className="text-white p-4 rounded-lg h-48 overflow-y-auto"
        >
            {lines.map(renderLine)}
        </div>
    );
};

const Cursor = () => {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setVisible((v) => !v);
        }, 500);

        return () => clearInterval(interval);
    }, []);

    return <span className={`${visible ? 'opacity-100' : 'opacity-0'}`}>|</span>;
};

export default Console;