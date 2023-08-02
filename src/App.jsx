import React from 'react'
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import PageA from '@/pages/PageA';
import PageB from '@/pages/pageB';
import NotFound from '@/pages/NotFound'
import Layout from '@/pages/Layout';

function App() {

  const routerData = [
    {
      path: "/",
      element: <Navigate to="/pageA" />,
      errorElement: <NotFound />,
    },
    {
      element: <Layout />,
      children: [
        {
          path: "pageA",
          element: <PageA/>,
          errorElement: <NotFound />
        },
        {
          path: "pageB",
          element: <PageB/>,
          errorElement: <NotFound />
        },
      ]
    },
  ]

  const router = createBrowserRouter(routerData);

  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  )
}

export default App