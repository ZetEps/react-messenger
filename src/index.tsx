import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './redux/app/store';
import "./index.css";
import App from './App';
import "./firebase/index";
import ErrorBoundary from "./core/features/ErrorBoundary/ErrorBoundary";
import Notifications from "./core/features/Notificator/Notifications";

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorBoundary>
          <Notifications>
              <App />
          </Notifications>
      </ErrorBoundary>
    </Provider>
  </React.StrictMode>
);


