import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Navbar.module.scss';

export default function Navbar() {
    return (
        <div className={styles.navbar}>
            <div className={styles.navbar__links}>
                <Link to='/'>Home</Link>
                <Link to='/posts'>Posts</Link>
                <Link to='/about'>About</Link>

            </div>
        </div>
    )
}
