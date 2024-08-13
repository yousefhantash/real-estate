    import React from 'react';
    import StatisticItem from './StatisticItem';
import "./propertieslist.css"

    const Statistics = () => {
    const stats = [
        { label: 'Added real estate', value: 370 },
        { label: 'The most interactive city', value: 'Ramallah', highlight: true },
        { label: 'Advertisers', value: 256 },
        { label: 'Average views/month', value: 1682 },
        { label: 'Most advertised about', value: 'Land', highlight: true },
    ];

    return (
        <div className="statistics">
        <h2>Statistics</h2>
        <div className="statistics-list">
            {stats.map((stat, index) => (
            <StatisticItem
                key={index}
                label={stat.label}
                value={stat.value}
                highlight={stat.highlight}
            />
            ))}
        </div>
        </div>
    );
    };

    export default Statistics;
