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
        if (lines.length > 0 && currentIndex < lines[lines.length - 1].content.length) {
            const timer = setTimeout(() => {
                setTypedText(lines[lines.length - 1].content.slice(0, currentIndex + 1));
                setCurrentIndex(currentIndex + 1);
            }, 50);

            return () => clearTimeout(timer);
        }
    }, [lines, currentIndex]);

    const renderLine = (line, index) => {
        const isLastLine = index === lines.length - 1;
        return (
            <div key={index} className="font-menlo text-xs">
                {renderLinePrefix(line.event_type)}
                <span className={getEventTypeColor(line.event_type)}>
                    {isLastLine ? typedText : renderLineContent(line)}
                    {isLastLine && <Cursor />}
                </span>
            </div>
        );
    };

    const renderLinePrefix = (eventType) => {
        switch (eventType) {
            case 'message':
                return <span className="text-light_grey mr-2">&gt; </span>;
            default:
                return <span className="text-light_grey mr-2">$ </span>;
        }
    };

    const renderLineContent = (line) => {
        if (line.event_type === 'xp') {
            return (
                <>
                    You've gained <span className="text-light_green">{line.amount} XP</span> in {line.skill}
                </>
            );
        }
        return line.content;
    };

    const getEventTypeColor = (eventType) => {
        switch (eventType) {
            case 'positive_event':
                return 'text-green';
            case 'negative_event':
                return 'text-light_red';
            case 'message':
                return 'text-blue';
            case 'xp':
                return 'text-light_grey';
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