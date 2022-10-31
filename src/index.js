import React from 'react';
import { createRoot } from 'react-dom/client';
import TodoContainer from './components/TodoContainer';

// The root element for the app.
const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <TodoContainer />
  </React.StrictMode>
);
