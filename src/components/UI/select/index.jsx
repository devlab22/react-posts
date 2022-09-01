import React from 'react';

import styles from './MySelect.module.scss';

export default function MySelect({ options, defaultValue='Sorting by' }) {
    return (
        <select className={styles.mySelect}>
            <option disabled value=''>{defaultValue}</option>
            {
                options.map(option => (
                    <option
                        key={option.key}
                        className={styles.myValue}
                        value={option.key}>
                        {option.value}
                    </option>
                ))
            }
        </select>
    )
}
