import React from "react";
import { Box, Button, Icon, Text } from "native-base";
import { DrawerHeaderProps } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
import fontSelector from "../../styles/fontSelector";

interface CustomHeaderProps {
    drawerData: DrawerHeaderProps;
}

const CustomHeader: React.FC<CustomHeaderProps> = ({ drawerData }) => {
    const toggleDrawer = () => {
        drawerData.navigation.toggleDrawer();
    };

    return (
        <Box
            bgColor="#17141F"
            h={120}
            alignItems="center"
            justifyContent="space-between"
            flexDirection="row"
            px={5}
        >
            <Button
                variant="unstyled"
                position="absolute"
                onPress={toggleDrawer}
            >
                <Ionicons name="menu-outline" size={28} color="white" />
            </Button>
            <Text
                color="white"
                margin="auto"
                fontSize="15"
                style={fontSelector({
                    weight: "SemiBold",
                })}
            >
                {drawerData.route.name}
            </Text>
        </Box>
    );
};

export default CustomHeader;
