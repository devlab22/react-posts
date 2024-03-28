import { Navbar, AppRouter, AppContext, PostService } from './components';
import { useNavigate } from 'react-router-dom';

import './App.scss'
import { useEffect, useState } from 'react';


function App() {

  const [isAuth, setIsAuth] = useState(false);
  const navigate = useNavigate();

  const handleOnLogout = async () => {

    try {

      const token = localStorage.getItem('token')

      if (token === null) {
        return
      }

      console.log(token)
     // const response = await PostService.logout(token)
      setIsAuth(false);
      sessionStorage.removeItem('auth');
      sessionStorage.removeItem('token')
      navigate('/login');     

    }

    catch (err) {
      console.log(err.message)
    }

  }

  useEffect(() => {
    if (localStorage.getItem('auth')) {
     // setIsAuth(true);
    }

  }, [])

  return (

    <AppContext.Provider value={{
      isAuth, setIsAuth
    }}>

      <div className='App'>
        <Navbar onLogout={handleOnLogout} />
        <AppRouter />
      </div>
    </AppContext.Provider>


  )

}

export default App;
