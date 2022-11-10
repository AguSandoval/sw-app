import React from "react";
import { Box, Text } from "native-base";
import { FlashList } from "@shopify/flash-list";
import store, { RootState } from "../redux/store";
import CharacterItem from "../components/CharacterItem";
import fontSelector from "../styles/fontSelector";
import { useSelector } from "react-redux";

/**
 * This screen renders a list of the user's favorite characters.
 * Removing them from the list will remove them from the store.
 */
const FavoritesScreen: React.FC = () => {
    const favorites = useSelector((store: RootState) => store.value);

    return (
        <Box bgColor="#17141F" flex={1} px={5}>
            {!store.getState().value.length && (
                <Text
                    color="white"
                    style={fontSelector({
                        weight: "Medium",
                    })}
                    alignSelf="center"
                    textAlign="center"
                >
                    No favorite characters yet
                </Text>
            )}
            <FlashList
                showsVerticalScrollIndicator={false}
                data={favorites}
                renderItem={({ item }) => <CharacterItem character={item} />}
                estimatedItemSize={20}
                refreshing={false}
                onRefresh={() => null}
            />
        </Box>
    );
};

export default FavoritesScreen;
