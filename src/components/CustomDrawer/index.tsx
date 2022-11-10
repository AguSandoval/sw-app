import { Ionicons } from "@expo/vector-icons";
import {
    DrawerContentComponentProps,
    DrawerItem,
    DrawerItemList,
} from "@react-navigation/drawer";
import { Box, Text } from "native-base";
import React from "react";
import { StyleSheet } from "react-native";
import fontSelector from "../../styles/fontSelector";

interface CustomDrawerProps {
    drawerData: DrawerContentComponentProps;
}

/**
 * Custom drawer component, used as prop for DrawerNavigator (drawerContent).
 * @param {DrawerContentComponentProps} drawerData - Drawer content props
 * @returns {JSX.Element}
 */
const CustomDrawer: React.FC<CustomDrawerProps> = ({ drawerData }) => {
    return (
        <Box bgColor="#17141F" w="100%" h="100%">
            <DrawerItem
                label={() => (
                    <Ionicons
                        name="md-close-outline"
                        size={28}
                        color="white"
                        style={styles.closeIcon}
                    />
                )}
                onPress={() => drawerData.navigation.closeDrawer()}
                inactiveTintColor="white"
            />
            <Box p={8}>
                {drawerData.state.routes.map((route, index) => {
                    const { name } = route;

                    return (
                        <DrawerItem
                            key={index}
                            label={() => (
                                <Text
                                    color="white"
                                    fontSize="22"
                                    style={fontSelector({
                                        weight: "SemiBold",
                                    })}
                                >
                                    {name}
                                </Text>
                            )}
                            onPress={() => drawerData.navigation.navigate(name)}
                            inactiveTintColor="white"
                        />
                    );
                })}
            </Box>
        </Box>
    );
};

const styles = StyleSheet.create({
    closeIcon: {
        marginTop: 30,
    },
});

export default CustomDrawer;
