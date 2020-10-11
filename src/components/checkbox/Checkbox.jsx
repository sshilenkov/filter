import React from 'react';
import './Checkbox.sass';

import classNames from 'classnames';

const Checkbox = ({ className, id, text, onClick }) => {
    const checkboxClasses = classNames(
        'checkbox',
        className
    );

    return (
        <div className={checkboxClasses}>
            <input onClick={onClick} type='checkbox' className='checkbox-hidden' id={id} />
            <label htmlFor={id}>{text}</label>
        </div>
    );
}

export default Checkbox;