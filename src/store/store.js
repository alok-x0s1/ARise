import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";
import cartReducer from "../features/cartSlice";
import customizerReducer from "../features/customizerSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";

const persistConfig = {
	key: "root",
	storage,
};

const rootReducer = {
	auth: authReducer,
	cart: cartReducer,
	customizer: customizerReducer,
};

const persistedReducer = persistReducer(
	persistConfig,
	combineReducers(rootReducer)
);

const store = configureStore({
	reducer: persistedReducer,
});

const persistor = persistStore(store);

export { store, persistor };
