import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './views/Home';
import Informacion from './views/Information';
import Productos from './views/Products';
import Galeria from './views/Gallery';
import Contactos from './views/Contact'
import Error from './views/Error';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/informacion",
    element: <Informacion />,
  },
  {
    path: "/productos",
    element: <Productos />,
  },
  {
    path: "/galeria",
    element: <Galeria />,
  },
  {
    path: "/contacto",
    element: <Contactos />,
  },
  {
    path: "*",
    element: <Error />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
