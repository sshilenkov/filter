import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './Price.sass';

import Title from '../title/Title';
import { Slider } from 'antd';
import 'antd/dist/antd.css';

import { inputSetPriceLimit, rangeSetPriceLimit } from 'store/actions';

const Price = () => {
    const dispatch = useDispatch();
    const price = useSelector(state => state.price);

    const inputSetPrice = (e) => dispatch(inputSetPriceLimit(Number(e.target.value), e.target.id));
    const rangeSetPrice = (e) => dispatch(rangeSetPriceLimit(e));

    return (
        <div className='price'>
            <Title title='Цена' />
            <div className="price__framework">
                <input
                    onChange={inputSetPrice}
                    className='filter__element filter__input price__input'
                    type='number'
                    placeholder='от 0 ₽'
                    id='min'
                    value={price[0] === 0 ? '' : price[0]}
                />
                <input
                    onChange={inputSetPrice}
                    className='filter__element filter__input price__input'
                    type='number'
                    placeholder='до 100 500 ₽'
                    id='max'
                    value={price[1] === 0 || price[1] === 100501 ? '' : price[1]}
                />
            </div>
            <Slider
                onChange={rangeSetPrice}
                range
                min={0}
                max={100500}
                step={100}
                value={price}
            />
        </div>
    );
}

export default Price;