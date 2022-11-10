import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigator from "./DrawerNavigator";


/**
 * Simple wrapper for the NavigationContainer component.
 * Only using a drawer, but other navigators can be added/nested here.
 */
const NavigationProvider = () => {
    return (
        <NavigationContainer>
            <DrawerNavigator />
        </NavigationContainer>
    );
};

export default NavigationProvider;
