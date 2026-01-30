import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import './styles/variables/app-var.css';
import './styles/variables/colors.css';
import './styles/global.css';
import { store } from './redux/app/store';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>,
);
