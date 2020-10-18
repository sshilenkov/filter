import React, { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './Countries.sass';

import CountriesList from './CountriesList';
import Title from './../title/Title';
import Checkbox from '../checkbox/Checkbox';
import { ReactComponent as Clear } from './clear.svg';

import { countryFilter, clickCheckbox } from 'store/actions';

const Countries = () => {
    const dispatch = useDispatch();
    const searchValue = useSelector(state => state.searchValue);
    const list = useSelector(state => state.matchesList);
    const selectedList = useSelector(state => state.selectedCountries);
    const searchInput = useRef(null);

    const search = (e) => dispatch(countryFilter(e.target.value));
    const clearSearch = () => {
        searchInput.current.focus();
        dispatch(countryFilter(''))
    };
    const setCountry = (e) => dispatch(clickCheckbox(e.target.id, 'country'));
    const isSelected = (id) => selectedList.includes(id);
    const countriesList = list.map((item, i) => <Checkbox
                                                    onClick={() => setCountry}
                                                    key={i}
                                                    id={item.name}
                                                    text={item.name}
                                                    isChecked={isSelected}
                                                />);
    
    return (
        <div className='countries'>
            <Title title='Страна' />
            <div className="countries__input-holder">
                <input
                    onChange={search}
                    className='filter__element filter__input countries__input'
                    type='text'
                    placeholder='Поиск стран'
                    value={searchValue}
                    ref={searchInput}
                />
                {searchValue && <button onClick={clearSearch} className={'countries__clear'}>
                    <Clear/>
                </button>}
            </div>
            <CountriesList
                list={countriesList}
                classes={'filter__element countries__list'}
            />
        </div>
    );
}

export default Countries;