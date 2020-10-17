import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './Reviews.sass';

import Title from '../title/Title';
import { setReviewsCount } from 'store/actions';

const Reviews = () => {
    const dispatch = useDispatch();
    const reviewsCount = useSelector(state => state.reviews);

    const setReviews = (e) => dispatch(setReviewsCount(Number(e.target.value), 'stars'));

    return (
        <div className='reviews'>
            <Title title='Количество отзывов (от)' />
            <input
                onChange={setReviews}
                className='filter__element filter__input reviews__input'
                type='number'
                min={0}
                placeholder='Например, от 10'
                value={reviewsCount ? reviewsCount : ''}
            />
        </div>
    );
}

export default Reviews;