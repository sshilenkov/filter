import React from 'react';
import { useDispatch } from 'react-redux';
import './Filter.sass';

import Countries from 'components/countries/Countries';
import Type from 'components/type/Type';
import Stars from 'components/stars/Stars';
import Reviews from 'components/reviews/Reviews';
import Price from 'components/price/Price';
import Hotels from 'components/hotels/Hotels';
import Pagination from 'components/pagination/Pagination';

import { applyFilter, resetFilter } from 'store/actions';

const Filter = () => {
    const dispatch = useDispatch();

    const applyFltr = () => dispatch(applyFilter());
    const clearFltr = () => dispatch(resetFilter());

    return (
      <div className='filter'>
        <div className='filter__sidebar'>
          <Countries />
          <Type />
          <Stars />
          <Reviews />
          <Price />
          <button onClick={applyFltr} className="filter__button filter__button--apply">Применить фильтр</button>
          <button onClick={clearFltr} className="filter__button filter__button--clear">Очистить фильтр</button>
        </div>
        <div className='filter__content'>
          <Hotels reset={clearFltr} />
          <Pagination />
        </div>
      </div>
    );
}

export default Filter;