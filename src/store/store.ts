import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

import { rootReducer } from '_store/rootReducers';

export const store = createStore(rootReducer, applyMiddleware(thunk));
