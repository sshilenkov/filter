import React from 'react';
import {List} from 'react-virtualized';

const CountriesList = ({ list, classes }) => {
    
    function rowRenderer({
      key,
      index,
      style
    }) {
      return (
        <div key={key} style={style}>
          {list[index]}
        </div>
      );
    }

    if (list.length) {
        return (
            <List
              width={325}
              height={200}
              rowCount={list.length}
              rowHeight={28.5}
              rowRenderer={rowRenderer}
              className={classes}
            />
        );
    } else {
        return (
            <div className="filter__element countries__list countries__list--empty">
                К сожалению, по вашему запросу ничего не найдено :(
            </div>
        );
    }
}

export default CountriesList;