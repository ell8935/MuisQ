import storage from "redux-persist/lib/storage";
import { authSlice } from "./reducers/authSlice";
import { roomsSlice } from "./reducers/roomsSlice";
import { modalSlice } from "./reducers/modalSlice";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { musicControlsSlice } from "./reducers/musicControlsSlice";
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const reducers = combineReducers({
  auth: authSlice.reducer,
  rooms: roomsSlice.reducer,
  modal: modalSlice.reducer,
  musicControls: musicControlsSlice.reducer,
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
