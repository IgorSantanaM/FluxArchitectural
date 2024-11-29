import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import './config/ReactotronConfig/reactotron'

import GlobalStyle from './styles/global';
import Header from './components/Header/index';
import Routes from './routes';

// Import the store
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <GlobalStyle />
        <Routes />
        <ToastContainer autoClose={3000}/>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
