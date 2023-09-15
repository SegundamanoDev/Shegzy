import {configureStore} from "@reduxjs/toolkit";
import userReducer from "../Redux/user";

export const store = configureStore({
	auth: userReducer,
});
