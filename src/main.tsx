import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import './styles/fonts.css';
import './i18n';

const root = createRoot(document.getElementById('root')!);

// Wait for translations to load
document.addEventListener('DOMContentLoaded', () => {
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
});