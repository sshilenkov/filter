import React, { useState } from 'react';
import './Card.sass';

import { ReactComponent as Star } from './star.svg';
import { ReactComponent as Location } from './location.svg';
import classNames from 'classnames';

const Card = ({ hotel }) => {
    const declOfRev = (number, titles) => {  
        const cases = [2, 0, 1, 1, 1, 2];  
        return titles[ (number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5] ];  
    }

    const [reserveBtn, setReserveBtn] = useState(false);

    const reservation = (e) => {
        setReserveBtn(!reserveBtn);
    }

    const btnClasses = classNames(
        'card__reservation',
        { 'card__reservation--reserved': reserveBtn }
    );

    const hotelStars = Number(hotel.stars.charAt(0));

    return (
        <div className='card'>
            <div className="card__head">
                <div className="card__title">{hotel.name}</div>
                <div className="card__price">{(hotel.price).toLocaleString('ru')} ₽</div>
            </div>
            <div className="card__info">
                <div className="card__stars">
                {
                    [0,1,2,3,4].map((itm, idx) => {
                        if (idx < hotelStars) {
                            return <Star className='card__star card__star--starred' key={idx} />
                        } else {
                            return <Star className='card__star' key={idx} />
                        }
                    })
                }
                </div>
                <div className="card__type">{hotel.type}</div>
                <div className="card__reviews">{hotel.reviews} {declOfRev(hotel.reviews, ['отзыв', 'отзыва', 'отзывов'])}</div>
                <div className="cart__location">
                    <Location className='card__location-icon' />
                    {hotel.location}
                </div>
                <div className="card__price-info">Цена за 1 ночь</div>
            </div>
            <div className="card__footer">
                <div className="card__description">{hotel.description}</div>
                <button className={btnClasses} onClick={reservation}>{reserveBtn ? 'Забронировано' : 'Забронировать'}</button>
            </div>
        </div>
    );
}

export default Card;