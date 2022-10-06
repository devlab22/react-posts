import { Navbar, AppRouter, AppContext } from './components';

import './App.scss'
import { useEffect, useState } from 'react';

function App() {

  const [isAuth, setIsAuth] = useState(false);


  window.addEventListener('beforeunload', (e) => {
    e.preventDefault()
    e.returnValue = ''
  })

  window.addEventListener('load', async (e) => {
     localStorage.setItem('refresh', true)
  })

  window.addEventListener('close', async (e) => {

  })
  window.addEventListener('unload', async (e) => {

  })


  useEffect(() => {
    if (localStorage.getItem('auth')) {
      setIsAuth(true);
    }

  }, [])

  return (

    <AppContext.Provider value={{
      isAuth, setIsAuth
    }}>

      <div className='App'>
        <Navbar />
        <AppRouter />
      </div>
    </AppContext.Provider>


  )

}

export default App;
