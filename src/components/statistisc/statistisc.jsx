import React from 'react';
import PropTypes from 'prop-types';
import css from './statistisccss.module.css';

const Statistics = ({ title, stats }) => {
  return (
    <section class={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}

      <ul class={css.stat}>
        {stats.map(stat => (
          <li className={css.item} key={stat.id}>
            <span className={css.label}>{stat.label}</span>
            <span className={css.percentage}>{stat.percentage}</span>
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
