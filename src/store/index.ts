import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { api } from '../services/api';
import { setupListeners } from '@reduxjs/toolkit/query';
import { userReducer } from '@/store/reducers/user';


const rootReducer = combineReducers({
  [api.reducerPath]: api.reducer,
  userReducer,
});

const persistConfig = {
  blacklist: [],
  key: 'root',
  storage: AsyncStorage,
  whitelist: [],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const setupStore = () =>
  configureStore({
    devTools: true,
    middleware: getDefaultMiddleware => {
      const middlewares = getDefaultMiddleware({
        immutableCheck: false,
        serializableCheck: false,
        thunk: true,
      }).concat(api.middleware);
      // if (__DEV__ && !process.env.JEST_WORKER_ID) {
      //   const createDebugger = require('redux-flipper').default;
      //   middlewares.push(createDebugger());
      // }
      return middlewares;
    },
    reducer: persistedReducer,
  });
export const store = setupStore();
export const persistor = persistStore(store);

setupListeners(store.dispatch);

export type RootReducerType = ReturnType<typeof rootReducer>;
export type StoreDispatchType = StoreType['dispatch'];
export type StoreType = ReturnType<typeof setupStore>;
