import React from 'react';

import styles from './MySelect.module.scss';

export default function MySelect({ options, value, OnChange, defaultValue='Sorting by' }) {
    return (
        <select 
            className={styles.mySelect}
            value={value}
            onChange={event => OnChange(event.target.value)}
            >
            <option disabled value=''>{defaultValue}</option>
            {
                options.map(option => (
                    <option
                        key={option.key}
                        value={option.key}>
                        {option.value}
                    </option>
                ))
            }
        </select>
    )
}
