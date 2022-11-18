import React, { useMemo } from "react";
import { Box, Input, Text, VStack } from "native-base";
import { FlashList } from "@shopify/flash-list";
import { RootState } from "../redux/store";
import CharacterItem from "../components/CharacterItem";
import fontSelector from "../styles/fontSelector";
import { useSelector } from "react-redux";

/**
 * This screen renders a list of the user's favorite characters.
 * Removing them from the list will remove them from the store.
 */
const FavoritesScreen: React.FC = () => {
    const favorites = useSelector((store: RootState) => store.value);
    const [search, setSearch] = React.useState("");

    const filteredFavorites = useMemo(() => {
        return favorites.filter((character) =>
            character.name.toLowerCase().includes(search.toLowerCase())
        );
    }, [favorites, search]);

    const searchBar = useMemo(() => {
        if (!favorites.length)
            return (
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
            );

        return (
            <VStack space={3} mb={8}>
                <Text
                    style={fontSelector({
                        weight: "SemiBold",
                    })}
                    color="white"
                >
                    Search a favourite
                </Text>
                <Input
                    borderColor="#B0B0B0"
                    borderRadius={14}
                    _focus={{
                        borderColor: "#B0B0B0",
                        backgroundColor: "transparent",
                    }}
                    color="white"
                    cursorColor="white"
                    placeholder="Luke"
                    returnKeyType="search"
                    onChangeText={(text) => setSearch(text)}
                />
            </VStack>
        );
    }, [favorites.length]);

    return (
        <Box bgColor="#17141F" flex={1} px={5}>
            {searchBar}
            <FlashList
                showsVerticalScrollIndicator={false}
                data={filteredFavorites}
                renderItem={({ item }) => <CharacterItem character={item} />}
                estimatedItemSize={20}
                refreshing={false}
                onRefresh={() => null}
            />
        </Box>
    );
};

export default FavoritesScreen;
