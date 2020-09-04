import React from 'react';
import StatStyle from './Stat.module.css';

export default function StatList({item}){
    // console.log('item', item);
    
    return item.map(elem=>{
       return ( <li key={elem.id}className={StatStyle.item} style={{backgroundColor: `rgb(${Math.round(Math.random()*255)},${Math.round(Math.random()*255)},${Math.round(Math.random()*255)})`}}>
      <span className={StatStyle.label}>{elem.label}</span>
    <span className={StatStyle.percentage}>{elem.percentage}</span>
    </li>)
    }
    )
    
}

