import React from "react";
import {
    createDrawerNavigator,
    DrawerNavigationOptions,
} from "@react-navigation/drawer";
import CharactersScreen from "../screen/CharactersScreen";
import FavoritesScreen from "../screen/FavoritesScreen";
import CustomHeader from "../components/CustomHeader";
import CustomDrawer from "../components/CustomDrawer";
import { INITIAL_ROUTE } from "../constants";

const Drawer = createDrawerNavigator();

const screenOptions: DrawerNavigationOptions = {
    header: (props) => {
        return <CustomHeader drawerData={props} />;
    },
    drawerStyle: {
        width: "100%",
    },
    drawerInactiveTintColor: "white",
    drawerActiveBackgroundColor: "transparent",
    drawerType: "back",
};

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator
            screenOptions={screenOptions}
            drawerContent={(props) => <CustomDrawer drawerData={props} />}
            initialRouteName={INITIAL_ROUTE}
        >
            <Drawer.Screen name="Characters" component={CharactersScreen} />
            <Drawer.Screen name="Favorites" component={FavoritesScreen} />
        </Drawer.Navigator>
    );
};

export default DrawerNavigator;
