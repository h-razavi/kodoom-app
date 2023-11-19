import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Results from './components/Results.tsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './i18n.ts'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/results",
    element: <Results />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
