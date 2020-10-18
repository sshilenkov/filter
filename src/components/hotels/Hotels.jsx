import React from 'react';
import { useSelector } from 'react-redux';
import './Hotels.sass';
import Empty from './empty.png';

import Card from 'components/card/Card';

const Hotels = ({ reset }) => {
    const hotels = useSelector(state => state.hotels);
    const currentPage = useSelector(state => state.currentPage);

    if (hotels.length) {
        return hotels
                    .slice(((currentPage - 1) * 15), (currentPage * 15))
                    .map((hotel, i) => <Card hotel={hotel} key={i} />);
    } else {
        return (
            <div className="hotels-empty">
                <img className="hotels-empty__img" src={Empty} alt="No results"/>
                <h4 className="hotels-empty__title">По данным параметрам ничего не найдено</h4>
                <div className="hotels-empty__description">
                    Попробуйте изменить параметры фильтрации или вернуться в общий каталог
                </div>
                <button onClick={reset} className="hotels-empty__button">Очистить фильтр</button>
            </div>
        );
    }
}

export default Hotels;