import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './components/Theme/slice';

const store = configureStore({
	reducer: {
		theme: themeReducer,
	},
});
export default store