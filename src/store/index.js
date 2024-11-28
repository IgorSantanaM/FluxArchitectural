import { configureStore } from '@reduxjs/toolkit';

import rootReducer from './modules/rootReducer';

const enhancer = process.env.NODE_ENV === 'development' ? console.tron.createEnhancer : null;

const store = configureStore({
  reducer: rootReducer, 
  enhancer: enhancer,
});

export default store;
