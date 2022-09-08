import React, { useContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import AppContext from '../context';
import { privateRoutes, publicRoutes } from '../router';

export default function AppRouter() {

  const context = useContext(AppContext);

  return (
    <Routes>
      {
        context.isAuth &&
        privateRoutes.map(route =>
          <Route
            key={route.path}
            exact={route.exact}
            path={route.path}
            element={route.component}
          />
        )
      }

      {
        publicRoutes.map(route =>
          <Route
            key={route.path}
            exact={route.exact}
            path={route.path}
            element={route.component}
          />
        )
      }
    </Routes>
  )
}
