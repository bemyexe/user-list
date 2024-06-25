import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { SignUpPage } from './app/pages/signup-page';

import './styles/global-styles.scss';
import './styles/colors.scss';

const router = createBrowserRouter([
  {
    path: '/',
    element: <SignUpPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
