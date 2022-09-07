import React from 'react';
import { usePages } from '../../../components';
import styles from './Pagination.module.scss';

export default function Pagination({totalPages, params, setParams }) {

    const pages = usePages(totalPages);

    return (
        <div className={styles.page__wrapper}>
            {pages.map(page =>

                <span
                    className={`${styles.page} ${page === params.page ? styles.page__current : ''}`}
                    key={page}
                    onClick={() => setParams({ ...params, page: page })}
                >{page}
                </span>

            )}
        </div>
    )
}
