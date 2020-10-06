import React from 'react';
import './Filter.sass';

import Countries from './../countries/Countries.jsx';

export default function Filter() {
  return (
    <div className="filter">
      <div className="filter__sidebar">
        <Countries />
      </div>
      <div className="filter__content"></div>
    </div>
  );
}