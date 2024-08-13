import React from 'react';

const StatisticItem = ({ label, value, highlight }) => {
  return (
    <div className="statistic-item">
      <p>{label}</p>
      <h3 className={highlight ? 'highlight' : ''}>{value}</h3>
    </div>
  );
};

export default StatisticItem;
