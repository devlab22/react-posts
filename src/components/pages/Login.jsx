import React, { useContext } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MyInput, MyButton, AppContext, MyProgressBar, PostFormModal } from '../../components';

import './Pages.scss';

export default function Login() {

  const context = useContext(AppContext);
  const navigate = useNavigate()
  const [visible, setVisible] = useState(true);
  
  const onLogin = (event) => {
    event.preventDefault();
    context.setIsAuth(true);
    localStorage.setItem('auth', 'true');
    navigate('/posts');
  }

  return (
    <div className='page'>
      <h1>Login</h1>
       <form onSubmit={onLogin}>
        <MyInput type='text' placeholder='Login' />
        <MyInput type='password' placeholder='Password' />
        <MyButton>enter</MyButton>
      </form> 

      <PostFormModal visible={visible} setVisible={setVisible}>
        <h2 style={{textAlign: "center"}}>title</h2>
        <p>process...</p>
        <MyProgressBar bgcolor="green" completed="50" />
      </PostFormModal>
      
    </div>
  )
}
