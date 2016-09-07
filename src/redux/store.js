// Very basic setup for store.
import { createStore } from 'redux';
import { reducers } from './reducers/reducer.js';

let store = createStore(reducers);
