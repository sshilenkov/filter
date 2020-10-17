import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './Filter.sass';

import Countries from 'components/countries/Countries';
import Type from 'components/type/Type';
import Stars from 'components/stars/Stars';
import Reviews from 'components/reviews/Reviews';
import Price from 'components/price/Price';
import Card from 'components/card/Card';

import { applyFilter, resetFilter } from 'store/actions';

const Filter = () => {
  const dispatch = useDispatch();
  const hotels = useSelector(state => state.hotels);

  const applyFltr = () => dispatch(applyFilter());
  const clearFilter = () => dispatch(resetFilter());

  return (
    <div className='filter'>
      <div className='filter__sidebar'>
        <Countries />
        <Type />
        <Stars />
        <Reviews />
        <Price />
        <button onClick={applyFltr} className="filter__button filter__button--apply">Применить фильтр</button>
        <button onClick={clearFilter} className="filter__button filter__button--clear">Очистить фильтр</button>
      </div>
      <div className='filter__content'>
        {hotels.map(hotel => <Card hotel={hotel} key={hotel.id} />)}
      </div>
    </div>
  );
}

export default Filter;