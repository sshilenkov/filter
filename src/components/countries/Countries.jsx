import React from 'react';
import './Countries.sass';

import Title from './../title/Title';
import countriesList from './countriesList.json'

const Countries = () => {
    return (
        <div className='countries'>
            <Title title='Страна' />
            <input className='filter__element filter__input countries__input' type='text' placeholder='Поиск стран' />
            <div className="filter__element countries__list">{countriesList.map((item) => <div key={item.id}>{item.name}</div>)}</div>
        </div>
    );
}

export default Countries;