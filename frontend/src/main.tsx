import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { Home, NotePage, AddNoteForm, UpdateNotePage } from './routes';

import './index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [
      {
        path: 'notes/:noteId',
        element: <NotePage />
      }
    ]
  },
  {
    path: 'notes/create',
    element: <AddNoteForm />
  },
  {
    path: 'notes/:noteId/edit',
    element: <UpdateNotePage />
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
