import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AddWorkPages from './Pages/addWorkPages';
import AddBlogPages from './Pages/AddBlogPages';
import App from './App';
import LoginPages from './Pages/LoginPages';
import UserContextProvider from './context/UserContextProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/addrealisation',
    element: <AddWorkPages />,
  },
  {
    path: '/addarticle',
    element: <AddBlogPages />,
  },
  {
    path: '/login',
    element: <LoginPages />,
  },
]);

root.render(
  /*   <React.StrictMode> */
  <UserContextProvider>
  <RouterProvider router={router} />
  </UserContextProvider>
  /*   </React.StrictMode> */
)
