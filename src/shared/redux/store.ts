import storage from "redux-persist/lib/storage";
import authSlice from "./reducers/authSlice";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import musicControlsSlice from "./reducers/musicControlsSlice";
import { persistStore, persistReducer } from "redux-persist";
import modalSlice from "./reducers/modalSlice";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const reducers = combineReducers({
  auth: authSlice,
  modal: modalSlice,
  musicControls: musicControlsSlice,
});

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: true,
      immutableCheck: false,
      serializableCheck: false,
    }),
});

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

const persistor = persistStore(store);

export { store, persistor };
export type { RootState, AppDispatch };
