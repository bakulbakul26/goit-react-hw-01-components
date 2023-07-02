import React from 'react';
import PropTypes from 'prop-types';
import './statistisccss.css';

const Statistics = ({ title, stats }) => {
  return (
    <section class="statistics">
      {title && <h2 className="title">{title}</h2>}

      <ul class="stat-list">
        {stats.map(stat => (
          <li className="item" key={stat.id}>
            <span className="label">{stat.label}</span>
            <span className="percentage">{stat.percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Statistics;
