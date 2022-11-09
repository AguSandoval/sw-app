import { AntDesign } from "@expo/vector-icons";
import { Button, HStack, Text, VStack } from "native-base";
import React, { useEffect } from "react";
import store, { addFavorite, removeFavorite } from "../../context/store";
import { People } from "../../screen/CharactersScreen";
import { getPlanet } from "../../services";
import fontSelector from "../../styles/fontSelector";
import PlanetBadge from "../PlanetBadge";

interface CharacterItemProps {
    character: People;
}

/**
 * CharacterItem component, to be rendered within a <FlatList />
 * Can be found in CharacterScreen and FavoritesScreen.
 * @param {People} character - Character data
 * @returns {JSX.Element}
 */
const CharacterItem: React.FC<CharacterItemProps> = ({ character }) => {
    const [planet, setPlanet] = React.useState("");
    const [isFavorite, setIsFavorite] = React.useState(
        !!store.getState().value.find((item) => item.name === character.name)
    );
    const getPlanetData = async (planetUrl: string) => {
        const { data } = await getPlanet(planetUrl);
        setPlanet(data.name);
    };

    useEffect(() => {
        getPlanetData(character.homeworld);
        const storeSubscription = store.subscribe(() => {
            setIsFavorite(
                !!store
                    .getState()
                    .value.find((item) => item.name === character.name)
            );
        });

        return () => storeSubscription();
    }, [character.homeworld]);

    const toggleFavorite = (character: People) => {
        if (!isFavorite) {
            store.dispatch(addFavorite(character));
            setIsFavorite(true);
            return;
        }
        store.dispatch(removeFavorite(character));
        setIsFavorite(false);
    };

    return (
        <HStack
            h={100}
            borderBottomWidth={1}
            borderBottomColor="#463B5E"
            mb={6}
            justifyContent="space-between"
        >
            <VStack space={2}>
                <Text
                    color="white"
                    style={fontSelector({
                        weight: "SemiBold",
                    })}
                >
                    {character.name}
                </Text>
                <Text
                    color="#FFFFFF70"
                    style={fontSelector({
                        weight: "SemiBold",
                    })}
                >
                    {`${character.gender} | ${character.birth_year}`}
                </Text>
                <PlanetBadge name={planet} />
            </VStack>
            <Button
                variant="unstyled"
                p={0}
                onPress={() => toggleFavorite(character)}
            >
                <AntDesign
                    name={isFavorite ? "heart" : "hearto"}
                    size={14}
                    color="#A2D1B1"
                />
            </Button>
        </HStack>
    );
};

export default CharacterItem;
