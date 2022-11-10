import { createSlice, configureStore } from "@reduxjs/toolkit";
import { People } from "../screen/CharactersScreen";

/**
 * In order to make this example simple, we are going to use a single slice
 * for the entire application. In a real application, you'll want to split
 * your state logic into multiple slices and combine them.
 *
 * Also combining reducers, slice and store in a single file is not a good practice.
 * But for simplicity sake, we are going to do it here.
 */
const favoriteCharactersSlice = createSlice({
    name: "favoriteCharacters",
    initialState: {
        value: [] as People[],
    },
    reducers: {
        addFavorite: (state, action) => {
            state.value = [...state.value, action.payload];
        },
        removeFavorite: (state, action) => {
            state.value = state.value.filter(
                (character) => character.name !== action.payload.name
            );
        },
    },
});

const store = configureStore({
    reducer: favoriteCharactersSlice.reducer,
});

export const { addFavorite, removeFavorite } = favoriteCharactersSlice.actions;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
