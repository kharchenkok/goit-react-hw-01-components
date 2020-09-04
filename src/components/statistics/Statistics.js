import React from 'react';
import StatStyle from './Stat.module.css';
import PropTypes from 'prop-types';
import StatList from './StatList';



export default function Statistics({title,stats}){
   
    return (
        <section className={StatStyle.statistics}>
    {title ? (<h2 className={StatStyle.title}>{title}</h2>):null}
    <ul className={StatStyle.statList}>
      <StatList item={stats}/>
  </ul>
</section>
    )
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats:PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.string,
        percentage: PropTypes.number,

    }),).isRequired
  };