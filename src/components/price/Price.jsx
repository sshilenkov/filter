import React from 'react';

import Title from '../title/Title';
import { Slider } from 'antd';
import 'antd/dist/antd.css';
import './Price.sass';

const Price = () => {
    return (
        <div className='price'>
            <Title title='Цена' />
            <div className="price__framework">
                <input className='filter__element filter__input price__input' type='number' placeholder='от 0 ₽' />
                <input className='filter__element filter__input price__input' type='number' placeholder='до 100 500 ₽' />
            </div>
            <Slider
                range
                min={0}
                max={100500}
                defaultValue={[0, 100500]}
                step={100}
            />
        </div>
    );
}

export default Price;