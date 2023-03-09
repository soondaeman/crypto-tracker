<<<<<<< HEAD
import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from 'react-query';
import App from './App';
=======
import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import { ThemeProvider } from "styled-components";
import App from "./App";
import { theme } from "./theme";
>>>>>>> cd1ce75318e8ee61f458e269b842d4a31d02f7eb

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
<<<<<<< HEAD
  document.getElementById('root') as HTMLElement
=======
  document.getElementById("root") as HTMLElement
>>>>>>> cd1ce75318e8ee61f458e269b842d4a31d02f7eb
);
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
<<<<<<< HEAD
      <App />
=======
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
>>>>>>> cd1ce75318e8ee61f458e269b842d4a31d02f7eb
    </QueryClientProvider>
  </React.StrictMode>
);
