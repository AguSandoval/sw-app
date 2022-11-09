import React, { useEffect, useState } from "react";
import { Box } from "native-base";
import { FlashList } from "@shopify/flash-list";
import store from "../context/store";
import CharacterItem from "../components/CharacterItem";
import { useIsFocused } from "@react-navigation/native";
import { People } from "./CharactersScreen";

const FavoritesScreen: React.FC = () => {
    const isFocused = useIsFocused();
    const [characters, setCharacters] = useState([] as People[]);

    useEffect(() => {
        const storeSubscription = store.subscribe(() => {
            setCharacters(store.getState().value);
        });

        return () => storeSubscription();
    }, [isFocused]);

    return (
        <Box bgColor="#17141F" flex={1} px={5}>
            <FlashList
                showsVerticalScrollIndicator={false}
                data={characters}
                renderItem={({ item }) => <CharacterItem character={item} />}
                estimatedItemSize={20}
                refreshing={false}
                onRefresh={() => null}
            />
        </Box>
    );
};

export default FavoritesScreen;
