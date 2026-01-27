import { createRoot } from 'react-dom/client';
import './index.css';
import { AppRoutes } from './routes/AppRoutes';
import { store } from './app/store';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { StrictMode } from 'react';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <AppRoutes />
      <ToastContainer />
    </Provider>
  </StrictMode>,
);
