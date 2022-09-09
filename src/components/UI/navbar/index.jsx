import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AppContext from '../../context';
import MyButton from '../button';

import styles from './Navbar.module.scss';

export default function Navbar() {

    const context = useContext(AppContext);
    const navigate = useNavigate()

    const onLogout = () => {
        context.setIsAuth(false);
        localStorage.removeItem('auth');
        navigate('/login');
    }

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
