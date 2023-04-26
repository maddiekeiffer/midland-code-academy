import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ThemeProvider } from './styled/themes/ThemeProvider';
import { QueryClient, QueryClientProvider } from 'react-query';
import StateProvider from './context/index';

const queryClient = new QueryClient();



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <StateProvider>
          <App />
        </StateProvider>
      </QueryClientProvider>
    </ThemeProvider>
  </React.StrictMode>
);


