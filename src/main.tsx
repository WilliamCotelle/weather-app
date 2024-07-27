import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import router from './routes/Router';
import './index.scss';

// Créez un conteneur pour la racine de votre application
const container = document.getElementById('root');

// Assurez-vous que le conteneur n'est pas null
if (container) {
  const root = ReactDOM.createRoot(container);
  root.render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
} else {
  console.error('Root container missing in index.html');
}
