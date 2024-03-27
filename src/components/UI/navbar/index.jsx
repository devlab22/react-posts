import React from 'react';
import { Link } from 'react-router-dom';
import MyButton from '../button';

import styles from './Navbar.module.scss';

export default function Navbar({onLogout=Function.prototype}) {


    return (
        <div className={styles.navbar}>
            <MyButton onClick={onLogout}>logout</MyButton>
            <div className={styles.navbar__links}>
                <Link className={styles.navbar__links} to='/'>Home</Link>
                <Link className={styles.navbar__links} to='/login'>Login</Link>
                <Link className={styles.navbar__links} to='/posts'>Posts</Link>
                <Link className={styles.navbar__links} to='/about'>About</Link>

            </div>
        </div>
    )
}
