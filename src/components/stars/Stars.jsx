import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './Stars.sass';

import Title from '../title/Title';
import Checkbox from '../checkbox/Checkbox';

import { clickCheckbox } from 'store/actions';

const Stars = () => {
    const dispatch = useDispatch();
    const selectedStars = useSelector(state => state.stars);

    const setStars = (e) => dispatch(clickCheckbox(e.target.id, 'stars'));
    let isSelected = (id) => selectedStars.includes(id);

    return (
        <div className='stars'>
            <Title title='Количество звезд' />
            <div className='filter__element stars__block'>
                <Checkbox onClick={() => setStars} isChecked={isSelected} id='1star' text='1 звезда' />
                <Checkbox onClick={() => setStars} isChecked={isSelected} id='2stars' text='2 звезды' />
                <Checkbox onClick={() => setStars} isChecked={isSelected} id='3stars' text='3 звезды' />
                <Checkbox onClick={() => setStars} isChecked={isSelected} id='4stars' text='4 звезды' />
                <Checkbox onClick={() => setStars} isChecked={isSelected} id='5stars' text='5 звезды' />
            </div>
        </div>
    );
}

export default Stars;