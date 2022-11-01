import React from 'react';
import { createRoot } from 'react-dom/client';
// File components
import TodoContainer from './components/TodoContainer';
// Stylesheet
import './App.css';

// The root element for the app.
const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <TodoContainer />
  </React.StrictMode>
);
