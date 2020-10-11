import React from 'react';
import './Reviews.sass';

import Title from '../title/Title';

const Reviews = () => {
    return (
        <div className='reviews'>
            <Title title='Количество отзывов (от)' />
            <input className='filter__element filter__input' type='text' placeholder='Например, от 10' />
        </div>
    );
}

export default Reviews;