import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { store } from './Redux/store';
import { Provider } from 'react-redux';
import './index.scss';
import './styles/normilize.scss'
import { App } from './App';

const rootElement = document.getElementById('root');

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);

  root.render(
    <Provider store={store}>
      <BrowserRouter>
        <React.StrictMode>
            <App />
        </React.StrictMode>
      </BrowserRouter>
    </Provider>
  );
}
