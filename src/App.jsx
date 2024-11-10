import { useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './routes/Root/Root';
import Home from './routes/Home/Home';
import Shop from './routes/Shop/Shop';
import Basket from './routes/Basket/Basket';
import './App.css';

function App() {
  const [basketItems, setBasketItems] = useState([]);

  const addToBasket = (item) => {
    const existingItem = basketItems.find(
      (element) => element.name === item.name
    );

    if (existingItem) {
      existingItem.quantity += item.quantity;
    } else {
      setBasketItems([...basketItems, item]);
    }

    console.log(basketItems);
  };

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      children: [
        { index: true, element: <Home /> },
        { path: '/shop', element: <Shop addToBasket={addToBasket} /> },
        { path: '/basket', element: <Basket /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
