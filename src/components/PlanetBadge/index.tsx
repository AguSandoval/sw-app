import React from "react";
import { Badge, HStack, Text } from "native-base";
import { Octicons } from "@expo/vector-icons";
import fontSelector from "../../styles/fontSelector";

interface PlanetBadgeProps {
    name: string;
}

/**
 * Component that renders a badge with the planet name.
 * @param {string} name - Planet name
 * @returns {JSX.Element}
 */
const PlanetBadge: React.FC<PlanetBadgeProps> = ({ name }) => {
    return (
        <Badge bgColor="rgba(255, 255, 255, 0.1)" borderRadius={8}>
            <HStack alignItems="center" space={2}>
                <Octicons name="location" size={16} color="white" />
                <Text
                    color="white"
                    style={fontSelector({
                        weight: "SemiBold",
                    })}
                >
                    {name}
                </Text>
            </HStack>
        </Badge>
    );
};

export default PlanetBadge;
