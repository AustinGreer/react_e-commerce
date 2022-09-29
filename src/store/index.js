import { createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import { shopReducer } from './reducers/reducer';

export const store = createStore(
  shopReducer,
  applyMiddleware(thunk)
);