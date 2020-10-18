import React from 'react';
import './Checkbox.sass';

import classNames from 'classnames';

const Checkbox = ({ className, id, text, onClick, isChecked }) => {
    const checkboxClasses = classNames(
        'checkbox',
        className
    );

    return (
        <div className={checkboxClasses}>
            <input
                onChange={onClick()}
                type='checkbox'
                className='checkbox-hidden'
                id={id}
                checked={isChecked(id)}
            />
            <label htmlFor={id} title={text}>{text}</label>
        </div>
    );
}

export default Checkbox;