import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { baseApi } from '../features/api/base-api';
import authReducer from '../features/auth/auth-slice';
import userReducer from '../features/user/user-slice';
import milkReceiptReducer from '../features/milk-receipt/milk-receipt-slice';
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { EApplicationEnvironment } from '../constants/app-constant';

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  milkReceipt: milkReceiptReducer,
  [baseApi.reducerPath]: baseApi.reducer,
});

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth', 'user'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(baseApi.middleware),
  devTools: import.meta.env.VITE_NODE_ENV === EApplicationEnvironment.DEVELOPMENT,
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
