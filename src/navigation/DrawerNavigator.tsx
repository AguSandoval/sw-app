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

/**
 * Drawer configuration options.
 * Custom header and drawer options are added here.
 */
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

/**
 * Drawer navigator for the app.
 * Wraps the screens, and provides a custom(behavior & style) header and drawer.
 */
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
