import { useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './routes/Root/Root';
import Home from './routes/Home/Home';
import Shop from './routes/Shop/Shop';
import Basket from './routes/Basket/Basket';
import './App.css';

function App() {
  const [basketItems, setBasketItems] = useState([]);

  const updateQuantityInBasket = (item, quantityDifference) => {
    const existingItem = basketItems.find(
      (element) => element.name === item.name
    );

    if (existingItem) {
      if (parseInt(existingItem.quantity) + parseInt(quantityDifference) > 99) {
        alert('Unfortunately, there are only 99 items currently in stock!');
        existingItem.quantity = 99;
      } else {
        existingItem.quantity =
          parseInt(existingItem.quantity) + parseInt(quantityDifference);
      }
    } else {
      setBasketItems([
        ...basketItems,
        { ...item, quantity: quantityDifference },
      ]);
    }
  };

  const setQuantityInBasket = (item, quantity) => {
    const existingItem = basketItems.find(
      (element) => element.name === item.name
    );

    if (existingItem) existingItem.quantity = quantity;
  };

  const removeItemFromBasket = (selected) => {
    setBasketItems(basketItems.filter((item) => item.name !== selected.name));
  };

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      children: [
        { index: true, element: <Home /> },
        {
          path: '/shop/:category',
          element: (
            <Shop updateQuantityInBasket={updateQuantityInBasket} state={{}} />
          ),
        },
        {
          path: '/shop',
          element: (
            <Shop updateQuantityInBasket={updateQuantityInBasket} state={{}} />
          ),
        },
        {
          path: '/basket',
          element: (
            <Basket
              items={basketItems}
              setQuantityInBasket={setQuantityInBasket}
              removeItemFromBasket={removeItemFromBasket}
            />
          ),
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
