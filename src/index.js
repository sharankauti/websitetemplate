import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from "@material-tailwind/react";
import { SnackbarProvider,closeSnackbar  } from 'notistack'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <SnackbarProvider hideIconVariant
          anchorOrigin={{vertical: 'top',horizontal: 'center',}} 
          autoHideDuration={3000}
          action={(snackbarId) => (
            <button onClick={() => closeSnackbar(snackbarId)}>
              close
            </button>
          )}
          >
          <App />
        </SnackbarProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

