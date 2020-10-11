import React from 'react';
import './Filter.sass';

import Countries from 'components/countries/Countries';
import Type from 'components/type/Type';
import Stars from 'components/stars/Stars';
import Reviews from 'components/reviews/Reviews';
import Price from 'components/price/Price';
import Card from 'components/card/Card';
import hotelsList from 'api/hotels.json';

const Filter = () => {
  return (
    <div className='filter'>
      <div className='filter__sidebar'>
        <Countries />
        <Type />
        <Stars />
        <Reviews />
        <Price />
        <button className="filter__button filter__button--apply">Применить фильтр</button>
        <button className="filter__button filter__button--clear">Очистить фильтр</button>
      </div>
      <div className='filter__content'>
        {hotelsList.map(hotel => <Card hotel={hotel} key={hotel.id} />)}
      </div>
    </div>
  );
}

export default Filter;