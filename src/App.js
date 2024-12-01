import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import './config/ReactotronConfig/reactotron'

import GlobalStyle from './styles/global';
import history from './services/history'
import Header from './components/Header/index';
import Routes from './routes';

// Import the store
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Router history={history} >
        <Header />
        <GlobalStyle />
        <Routes />
        <ToastContainer autoClose={3000}/>
      </Router >
    </Provider>
  );
}

export default App;
