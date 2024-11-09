import { useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './routes/Root/Root';
import Home from './routes/Home/Home';
import Shop from './routes/Shop/Shop';
import Basket from './routes/Basket/Basket';
import './App.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      { index: true, element: <Home /> },
      { path: '/shop', element: <Shop /> },
      { path: '/basket', element: <Basket /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
