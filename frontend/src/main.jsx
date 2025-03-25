import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './routes/App.jsx';
import ErrorPage from './error-page.jsx';
import List, { Loader as ListLoader } from './routes/List.jsx';
import Add, { Action as AddAction } from './routes/Add.jsx';
import Update, { Loader as UpdateLoader, Action as UpdateAction} from './routes/Update.jsx'
import { Action as DeleteAction } from './routes/destroy.jsx'
import Home from './routes/Home.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        element: <Home />,
        index: true,
      },
      {
        path: '/list',
        element: <List />,
        loader: ListLoader,
      },
      {
        path: '/add',
        element: <Add />,
        action: AddAction,
      },
      {
        path:'/list/:id/update',
        element:<Update/>,
        loader:UpdateLoader,
        action:UpdateAction
      },
      {
        path:'/list/:id/delete',
        action: DeleteAction
      }
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
