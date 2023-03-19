import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { queueListSlice } from "./reducers/QueueListSlice";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const reducers = combineReducers({
  queueList: queueListSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

const persistor = persistStore(store);

export { store, persistor };
export type { RootState, AppDispatch };
