import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './Pagination.sass';

import ReactPaginate from 'react-paginate';

import { selectPage } from 'store/actions';

const Pagination = () => {
    const dispatch = useDispatch();
    const hotels = useSelector(state => state.hotels);
    
    const clickPage = (page) => dispatch(selectPage(page.selected + 1));

    const pageCount = hotels.length % 15 === 0 ? hotels.length / 15 : (hotels.length % 15) + 1;

    if (hotels.length > 15) {
        return  <ReactPaginate
                    pageCount={pageCount}
                    pageRangeDisplayed={3}
                    marginPagesDisplayed={1}
                    previousLabel={'Назад'}
                    nextLabel={'Следующая'}
                    onPageChange={clickPage}
                    containerClassName={'pagination'}
                    previousClassName={'pagination__button'}
                    nextClassName={'pagination__button pagination__button--next'}
                    disabledClassName={'pagination__button--disabled'}
                    pageClassName={'pagination__page'}
                    pageLinkClassName={'pagination__page-link'}
                    activeLinkClassName={'pagination__page-link--active'}
                />
    } else return false;
}

export default Pagination;