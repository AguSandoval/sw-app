import React, { useEffect } from "react";
import { Box } from "native-base";
import { getCharacters } from "../services";
import { FlashList } from "@shopify/flash-list";
import * as SplashScreen from "expo-splash-screen";
import CharacterItem from "../components/CharacterItem";
import store from "../context/store";

export interface People {
    birth_year: string;
    eye_color: string;
    films: any;
    gender: string;
    hair_color: string;
    height: string;
    homeworld: string;
    mass: string;
    name: string;
    skin_color: string;
    species: any;
    starships: any;
    vehicles: any;
}

const CharactersScreen: React.FC = () => {
    const [characters, setCharacters] = React.useState([] as People[]);
    const [isLoading, setIsLoading] = React.useState(true);

    const getData = async () => {
        const { data } = await getCharacters();
        setCharacters(data.results);
        setIsLoading(false);
    };

    useEffect(() => {
        getData();
        const storeSubscription = store.subscribe(() =>
            console.log("store changed")
        );

        return () => storeSubscription();
    }, []);

    return (
        <Box
            bgColor="#17141F"
            flex={1}
            onLayout={async () => await SplashScreen.hideAsync()}
            px={5}
        >
            <FlashList
                showsVerticalScrollIndicator={false}
                data={characters}
                renderItem={({ item }) => <CharacterItem character={item} />}
                estimatedItemSize={20}
                refreshing={isLoading}
                onRefresh={() => null}
            />
        </Box>
    );
};

export default CharactersScreen;
