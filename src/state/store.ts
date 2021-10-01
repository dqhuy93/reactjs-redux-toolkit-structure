import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { reducer } from './reducer';

export const store = configureStore({
  reducer: reducer,
  devTools: process.env.NODE_ENV !== 'production',
  // preloadedState, // The initial state, same as Redux's createStore.
});

/**
 * @see https://redux-toolkit.js.org/usage/usage-with-typescript#getting-the-dispatch-type
 */
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
