import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import DrawerNavigator from "./DrawerNavigator";

const NavigationProvider = () => {
    return (
        <NavigationContainer>
            <DrawerNavigator />
        </NavigationContainer>
    );
};

export default NavigationProvider;
