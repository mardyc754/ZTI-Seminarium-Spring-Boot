import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { Home, AddNoteForm, UpdateNotePage } from './routes';

import './index.css';
import { ChakraProvider } from '@chakra-ui/react';
import { PageWrapper } from './components';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/create',
    element: <AddNoteForm />
  },
  {
    path: '/:noteId/edit',
    element: <UpdateNotePage />
  }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider>
      <PageWrapper>
        <RouterProvider router={router} />
      </PageWrapper>
    </ChakraProvider>
  </React.StrictMode>
);
