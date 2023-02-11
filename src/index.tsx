import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './redux/app/store';
import "./index.css";
import App from './App';
import "./firebase/index";
import ErrorBoundary from "./app/ErrorBoundary/ErrorBoundary";

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorBoundary>
          <App />
      </ErrorBoundary>
    </Provider>
  </React.StrictMode>
);


