import React, { useContext } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MyInput, MyButton, AppContext, MyProgressBar, PostFormModal, PostService } from '../../components';
import {v4 as uuidv4} from 'uuid'

import './Pages.scss';

export default function Login() {

  const context = useContext(AppContext);
  const navigate = useNavigate()
  const [visible, setVisible] = useState(false);
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  
  const handleLogin = async (event) => {
    event.preventDefault();
    context.setIsAuth(true);

    const token = uuidv4()

    const credentials = btoa(`${username}:${password}`);
    const params = {
        "token": token,
        "credentials": credentials
    }

    try{
      
      //const response = await PostService.login(params)
      localStorage.setItem('auth', 'true');
      localStorage.setItem('token', token)
      navigate('/posts');
    }

    catch(err){
      console.log(err.message)
    }
    
  }

  return (
    <div className='page'>
      <h1>Login</h1>
       <form onSubmit={handleLogin}>
        <MyInput 
          type='text' 
          placeholder='Login' 
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          autoFocus required/>
        <MyInput 
          type='password'   
          placeholder='Password' 
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          required/>
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
