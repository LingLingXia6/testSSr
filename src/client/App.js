import React from 'react';
import ReactDom from 'react-dom';
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from 'react-query'
// import { BrowserRouter, useRoutes } from 'react-router-dom';
import Routes from '../Routes.js';
import { Provider } from 'react-redux';
import { hydrateRoot, createRoot } from 'react-dom/client';
import { getClientStore } from '../store/index.js';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const App = () => {
  const router = createBrowserRouter(Routes);
  // Create a client
const queryClient = new QueryClient()
  return (
    <Provider store={getClientStore()}>
      <QueryClientProvider client={queryClient}>
        
       
      <RouterProvider router={router} />
      </QueryClientProvider>
    </Provider>
  );
};

export default App