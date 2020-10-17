import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './Countries.sass';

import Title from './../title/Title';
import Checkbox from '../checkbox/Checkbox';

import { countryFilter, clickCheckbox } from 'store/actions';

const Countries = () => {
    const dispatch = useDispatch();
    const list = useSelector(state => state.matchesList);
    const selectedList = useSelector(state => state.selectedCountries);

    const search = (e) => dispatch(countryFilter(e.target.value));
    const setCountry = (e) => dispatch(clickCheckbox(e.target.id, 'country'));
    const isSelected = (id) => selectedList.includes(id);
    
    return (
        <div className='countries'>
            <Title title='Страна' />
            <input onChange={search} className='filter__element filter__input countries__input' type='text' placeholder='Поиск стран' />
            <div className='filter__element countries__list'>
                {list.map((item) => <Checkbox
                                        onClick={() => setCountry}
                                        key={item.id}
                                        id={item.name}
                                        text={item.name}
                                        isChecked={isSelected}
                                    />)}
            </div>
        </div>
    );
}

export default Countries;