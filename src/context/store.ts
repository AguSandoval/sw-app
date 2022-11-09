import { createSlice, configureStore } from "@reduxjs/toolkit";
import { People } from "../screen/CharactersScreen";

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

export const { addFavorite, removeFavorite } = favoriteCharactersSlice.actions;

const store = configureStore({
    reducer: favoriteCharactersSlice.reducer,
});

export default store;
