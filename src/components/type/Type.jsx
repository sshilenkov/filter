import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './Type.sass';

import Title from '../title/Title';
import Checkbox from '../checkbox/Checkbox';

import { clickCheckbox } from 'store/actions';

const Type = () => {
    const dispatch = useDispatch();
    const selectedType = useSelector(state => state.type);

    const setType = (e) => dispatch(clickCheckbox(e.target.id, 'type'));
    let isSelected = (id) => selectedType.includes(id);

    return (
        <div className='type'>
            <Title title='Тип' />
            <div className='filter__element type__block'>
                <Checkbox
                    onClick={() => setType}
                    id='Апартаменты'
                    text='Апартаменты'
                    class='checkbox--type'
                    isChecked={isSelected}
                />
                <Checkbox
                    onClick={() => setType}
                    id='Отель'
                    text='Отель'
                    isChecked={isSelected}
                />
            </div>
        </div>
    );
}

export default Type;