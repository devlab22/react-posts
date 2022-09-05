import React from 'react';
import { MySelect, MyInput } from '../../components';

import styles from './PostFilter.module.scss';

export default function PostFilter({filter, setFilter, options}) {

    return (
        <div className={styles.content}>
            <MyInput
                placeholder="Search..."
                value={filter.search}
                onChange={event => setFilter({...filter, search: event.target.value})}
            />

            <MySelect
                options={options}
                defaultValue='Sorting by'
                value={filter.sort}
                OnChange={selectedSort => setFilter({...filter, sort: selectedSort})}
            />
        </div>
    )
}
