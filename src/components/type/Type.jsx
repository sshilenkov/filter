import React from 'react';
import { useDispatch } from 'react-redux';
import './Type.sass';

import Title from '../title/Title';
import Checkbox from '../checkbox/Checkbox';

import { clickCheckbox } from 'store/actions';

const Type = () => {
    const dispatch = useDispatch();

    const setType = (e) => dispatch(clickCheckbox(e.target.id, 'type'));

    return (
        <div className='type'>
            <Title title='Тип' />
            <div className='filter__element type__block'>
                <Checkbox onClick={setType} id='aparments' text='Апартаменты' class='checkbox--type' />
                <Checkbox onClick={setType} id='hotel' text='Отель' />
            </div>
        </div>
    );
}

export default Type;