import React from 'react';
import { MySelect, MyInput } from '../../components';

import styles from './PostFilter.module.scss';

export default function PostFilter({filter, setFilter, options, params, setParams}) {

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
            
            <br/>
            <MySelect
                options={[
                    { 'key': '5', 'value': '5' },
                    { 'key': '10', 'value': '10' },
                    { 'key': '25', 'value': '25' },
                    { 'key': '-1', 'value': 'all posts' },
                ]}
                defaultValue='Limit'
                value={params.limit}
                OnChange={limit => setParams({...params, limit: limit})}
                />

        </div>
    )
}
