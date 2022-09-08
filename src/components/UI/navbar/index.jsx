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
                <Link to='/'>Home</Link>
                <Link to='/login'>Login</Link>
                <Link to='/posts'>Posts</Link>
                <Link to='/about'>About</Link>

            </div>
        </div>
    )
}
