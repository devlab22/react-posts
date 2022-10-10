import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AppContext from '../../context';
import MyButton from '../button';
import {PostService} from '../../../components'
import {v4 as uuidv4} from 'uuid'

import styles from './Navbar.module.scss';

export default function Navbar({onLogout}) {

    const context = useContext(AppContext);
    const navigate = useNavigate()

    const handleOnLogout = async () => {

        onLogout();
       /*  try{
            
            const token = localStorage.getItem('token')
            console.log(token)

            const response = await PostService.logout(token)

            localStorage.removeItem('token')
        }

        catch(err){
            console.log(err.message)
        }

        context.setIsAuth(false);
        localStorage.removeItem('auth');
        navigate('/login'); */
    }

    return (
        <div className={styles.navbar}>
            <MyButton onClick={handleOnLogout}>logout</MyButton>
            <div className={styles.navbar__links}>
                <Link className={styles.navbar__links} to='/'>Home</Link>
                <Link className={styles.navbar__links} to='/login'>Login</Link>
                <Link className={styles.navbar__links} to='/posts'>Posts</Link>
                <Link className={styles.navbar__links} to='/about'>About</Link>

            </div>
        </div>
    )
}
