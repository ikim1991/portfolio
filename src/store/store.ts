import { createStore } from 'redux';
import RootReducer from './reducers/RootReducer';

export type AppState = ReturnType<typeof RootReducer>
export const Store = createStore(RootReducer)