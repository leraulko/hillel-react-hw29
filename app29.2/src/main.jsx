import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

import todosReducer from './store/todosSlice.js';

const store = configureStore({
  reducer: {
    todos: todosReducer,
  }
})

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>,
)
